import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'contadores_norias' })
export class NoriasCount {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  datahora: Date;

  @Column()
  cont_pendura: number;
  
  @Column()
  diferenca_pen_esc: number;

  @Column()
  cont_esc: number;

  @Column()
  cont_evisceradora: number;

  @Column()
  cont_evc: number;

  @Column()
  cont_sif: number;

  @Column()
  miudos_antes: number;

  @Column()
  miudos_depois: number;

  @Column()
  diferenca_miudos: number;

  @Column()
  cont_aut: number;

  @Column()
  cont_man1: number;

  @Column()
  cont_man2: number;

  @Column()
  cont_chillers: number;
}
