import { Base } from '../../common/entities/base-entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Status extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;
}
