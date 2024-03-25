import { Base } from '../../common/entities/base-entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Role extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
