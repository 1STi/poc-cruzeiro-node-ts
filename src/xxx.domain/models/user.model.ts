import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  email: string;
}
