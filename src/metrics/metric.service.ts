import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import { Repository, EntityManager, Between } from 'typeorm';
import { NoriasCount } from './norias-count.entity';
import { NoriasSpeed } from './norias-speed.entity';
import { Ping } from './ping.entity';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(NoriasCount)
    private noriasCountRepository: Repository<NoriasCount>,
    @InjectRepository(NoriasSpeed)
    private noriasSpeedRepository: Repository<NoriasSpeed>,
    @InjectRepository(Ping)
    private pingRepository: Repository<Ping>,
    @InjectEntityManager() private readonly entityManager: EntityManager,
  ) {}

  async findCount(): Promise<NoriasCount[]> {
    return this.noriasCountRepository.find({
      select: [
        'id',
        'datahora',
        'cont_esc',
        'cont_evc',
        'cont_sif',
        'cont_aut',
        'cont_man1',
        'cont_man2',
        'cont_chillers',
      ],
      order: {
        datahora: 'DESC',
      },
      take: 1,
    });
  }

  async findSpeed(): Promise<NoriasSpeed[]> {
    return this.noriasSpeedRepository.find({
      select: [
        'id',
        'datahora',
        'vel_esc_evc',
        'vel_sif',
        'vel_aut',
        'vel_man1',
        'vel_man2',
      ],
      order: {
        datahora: 'DESC',
      },
      take: 1,
    });
  }

  async findPing(): Promise<Ping[]> {
    return this.pingRepository.find({
      select: ['id', 'datahora', 'camera_sangria'],
      order: {
        datahora: 'DESC',
      },
      take: 1,
    });
  }

  async findSpeedBetweenDates(start: Date, end: Date): Promise<NoriasSpeed[]> {
    return this.noriasSpeedRepository.find({
      select: [
        'id',
        'datahora',
        'vel_esc_evc',
        'vel_sif',
        'vel_aut',
        'vel_man1',
        'vel_man2',
      ],
      where: {
        datahora: Between(start, end),
      },
      order: {
        datahora: 'ASC',
      },
    });
  }

  async findCounter(): Promise<NoriasCount[]> {
    const query = `SELECT *
      FROM contadores_norias
      WHERE datahora >= DATE_SUB(NOW(), INTERVAL 15 DAY)
        AND HOUR(datahora) = 0 
        AND MINUTE(datahora) = 40
      ORDER BY datahora DESC;`; 
    return this.entityManager.query(query);
  }
}
