import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'velocidades_norias' })
export class NoriasSpeed {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  datahora: Date;

  @Column()
  vel_esc_evc: number;

  @Column()
  vel_sif: number;

  @Column()
  vel_aut: number;

  @Column()
  vel_man1: number;

  @Column()
  vel_man2: number;
}
