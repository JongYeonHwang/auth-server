import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserStatus } from '../../common/enum/user-status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
  userName: string;
  @Column({ type: 'varchar', length: 12, nullable: false })
  password: string;
  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  nickName: string;
  @Column({ type: 'int', nullable: false, unsigned: true })
  age: number;
  @Column({ type: 'enum', enum: UserStatus, nullable: false })
  status: UserStatus;
  @CreateDateColumn({ type: 'datetime', precision: 0, nullable: false })
  createdAt: Date;
}
