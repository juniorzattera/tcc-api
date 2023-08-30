import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricController } from './metric.controller';
import { MetricService } from './metric.service';
import { NoriasCount } from './norias-count.entity';
import { NoriasSpeed } from './norias-speed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoriasCount, NoriasSpeed])],
  controllers: [MetricController],
  providers: [MetricService],
  exports: [MetricService],
})
export class MetricModule {}
