import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricController } from './metric.controller';
import { MetricService } from './metric.service';
import { NoriasCount } from './norias-count.entity';
import { NoriasSpeed } from './norias-speed.entity';
import { Ping } from './ping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoriasCount, NoriasSpeed, Ping])],
  controllers: [MetricController],
  providers: [MetricService],
  exports: [MetricService],
})
export class MetricModule {}
