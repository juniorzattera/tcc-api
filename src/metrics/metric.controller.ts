import { Controller, Get } from '@nestjs/common';
import { MetricService } from './metric.service';
import { NoriasSpeed } from './norias-speed.entity';
import { NoriasCount } from './norias-count.entity';
import { Ping } from './ping.entity';

@Controller('metrics')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Get('count')
  async findCount(): Promise<NoriasCount[]> {
    return this.metricService.findCount();
  }

  @Get('speed')
  async findSpeed(): Promise<NoriasSpeed[]> {
    return this.metricService.findSpeed();
  }

  @Get('ping')
  async findPing(): Promise<Ping[]> {
    return this.metricService.findPing();
  }
}
