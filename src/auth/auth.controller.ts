import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      return { message: 'Credenciais inválidas' };
    }
    const token = await this.authService.generateToken({
      sub: user.id,
      role: user.role,
      username: user.username,
    });
    return { access_token: token };
  }
}
