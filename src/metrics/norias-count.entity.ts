import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contadores_norias' })
export class NoriasCount {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  datahora: Date;

  @Column()
  cont_esc: number;

  @Column()
  cont_evc: number;

  @Column()
  cont_sif: number;

  @Column()
  cont_aut: number;

  @Column()
  cont_man1: number;

  @Column()
  cont_man2: number;
}
