import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ping' })
export class Ping {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  datahora: Date;

  @Column()
  camera_sangria: number;
}
