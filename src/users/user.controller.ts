import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: User) {
    const { username, password } = body;
    const exist = await this.userService.findByUsername(username);
    if (exist) {
      return { message: 'Usuário já existe' };
    }
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await this.userService.create({
      username,
      password: passwordHash,
    });
    return {
      id: user.id,
      message: 'Usuário criado com sucesso',
    };
  }
}
