import { EntityId } from 'typeorm/repository/EntityId';
import { DeleteResult } from 'typeorm';

export interface IBaseService<T> {
  findById(id: EntityId): Promise<T | undefined>;

  findByIds(id: [EntityId]): Promise<T[]>;

  delete(id: EntityId): Promise<DeleteResult>;
}
