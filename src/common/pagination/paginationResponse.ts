/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { InternalServerErrorException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { isEmpty } from 'lodash';
import { SelectQueryBuilder } from 'typeorm';
import { Pagination, Sorter } from './queryFilter';

export const ORDER_BY_DESC = 'DESC';
export const ORDER_BY_ASC = 'ASC';
export const MAX_ROW = 100;

export type ClassType<T> = { new (...args: any[]): T };

export class PaginationResponse {
  @ApiProperty()
  pageNumber: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  totalPage: number;
}

export const PaginatedResponse = <T>(TItemClass: ClassType<T>) => {
  // `isAbstract` decorator option is mandatory to prevent registering in schema
  abstract class PaginatedResponseClass {
    @ApiProperty()
    data: T[];

    @ApiProperty()
    pagination?: PaginationResponse;
  }

  return PaginatedResponseClass;
};

export const getPaginatedResponse = async <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ResponseType: any,
  QueryBuilder: SelectQueryBuilder<T>,
  Pagination: Pagination,
  sorter?: Sorter,
) => {
  if (sorter) {
    if (
      sorter.orderBy == null ||
      sorter.orderBy.toUpperCase() == ORDER_BY_ASC
    ) {
      QueryBuilder.addOrderBy(sorter.field, ORDER_BY_ASC);
    } else if (sorter.orderBy.toUpperCase() == ORDER_BY_DESC) {
      QueryBuilder.addOrderBy(sorter.field, ORDER_BY_DESC);
    } else {
      throw new InternalServerErrorException(
        `Unknown sorter operation: ${sorter.orderBy}`,
      );
    }
  }

  if (!isEmpty(Pagination)) {
    if (Pagination.pageSize > MAX_ROW) {
      Pagination.pageSize = MAX_ROW;
    }

    QueryBuilder.skip(Pagination.pageSize * (Pagination.pageNumber - 1)).take(
      Pagination.pageSize,
    );

    const [data, count] = await QueryBuilder.getManyAndCount();
    ResponseType.data = data;
    ResponseType.pagination = new PaginationResponse();
    ResponseType.pagination.total = count;
    ResponseType.pagination.pageNumber = Pagination.pageNumber;
    ResponseType.pagination.pageSize = Pagination.pageSize;
    ResponseType.pagination.totalPage = Math.ceil(count / Pagination.pageSize);
  } else {
    ResponseType.data = await QueryBuilder.limit(MAX_ROW).getMany();
  }
  return ResponseType;
};
