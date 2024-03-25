import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Base } from 'src/common/entities/base-entity';

@Entity({ name: 'users' })
export class User extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'phonenumber' })
  phoneNumber: string;

  @Column({ name: 'firstname' })
  firstName: string;

  @Column({ name: 'lastname' })
  lastName: string;

  @Column({ name: 'fullname' })
  fullName: string;

  @Column()
  address1: string;
}
