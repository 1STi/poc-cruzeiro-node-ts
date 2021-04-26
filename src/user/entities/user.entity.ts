import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUsers {
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
