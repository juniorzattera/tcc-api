import {
  Body,
  Request,
  Controller,
  Post,
  UseGuards,
  Put,
  Get,
  Delete,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private validateFields(username: string, password: string, role: string) {
    this.validateRole(role);

    if (!username || !password) {
      throw new Error('Dados inválidos');
    }
  }

  private validateRole(role: string) {
    if (role !== 'admin') {
      throw new Error('Você não tem permissão');
    }
  }

  // @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req, @Body() body: User) {
    const { username, password } = body;
    // const { role } = req.user;
    const role = 'admin';

    this.validateFields(username, password, role);

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

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Request() req, @Body() body: User) {
    const { username, password } = body;
    const { role } = req.user;

    this.validateFields(username, password, role);

    const exist = await this.userService.findById(req.params.id);
    if (!exist) {
      return { message: 'Usuário não existe' };
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await this.userService.update({
      id: exist.id,
      username,
      password: passwordHash,
    });

    return {
      id: user.id,
      message: 'Usuário atualizado com sucesso',
    };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req) {
    this.validateRole(req.user.role);

    const users = await this.userService.findAll();
    return users;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Request() req) {
    this.validateRole(req.user.role);

    const exist = await this.userService.findById(req.params.id);
    if (!exist) {
      return { message: 'Usuário não existe' };
    }

    const users = await this.userService.remove(req.params.id);
    return users;
  }
}
