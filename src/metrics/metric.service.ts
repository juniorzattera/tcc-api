import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoriasCount } from './norias-count.entity';
import { NoriasSpeed } from './norias-speed.entity';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(NoriasCount)
    private noriasCountRepository: Repository<NoriasCount>,
    @InjectRepository(NoriasSpeed)
    private noriasSpeedRepository: Repository<NoriasSpeed>,
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
}
