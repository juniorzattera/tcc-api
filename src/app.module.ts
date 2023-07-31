import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { User } from './users/user.entity';
import { JwtModule } from '@nestjs/jwt';

import { HealthController } from './health/health.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'api',
      password: 'apipassword',
      database: 'main',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrationsRun: true,
    }), // mudar para env
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret', // mudar para env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [HealthController, AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AppModule {}
