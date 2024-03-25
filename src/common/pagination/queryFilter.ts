/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsString, IsOptional, Max, Min, IsInt, IsIn } from 'class-validator';

export class QueryFilterDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @ApiProperty({
    default: 1,
  })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Max(100)
  @Min(1)
  @ApiProperty({
    default: 10,
  })
  limit: number = 10;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  orderBy?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  filter?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  q?: string;

  @IsOptional()
  @ApiProperty({
    required: false,
  })
  isSeen?: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  beforeCursor: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  afterCursor: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  startDate?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  endDate?: string;
}

export class Sorter {
  @ApiProperty({ default: 'createdAt' })
  @IsOptional()
  @IsString()
  field: string = 'createdAt';

  @IsIn(['ASC', 'DESC'])
  @IsOptional()
  @ApiProperty({ default: 'DESC' })
  orderBy: 'ASC' | 'DESC' = 'DESC';
}

export class Pagination {
  // @Min(1)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @ApiProperty({ default: 1 })
  pageNumber: number = 1;

  // @Min(1)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @ApiProperty({ default: 10 })
  pageSize: number = 10;
}
