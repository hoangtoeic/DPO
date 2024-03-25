import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/request/sign-in.dto';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('sign-in')
  async userSignIn(@Body() input: SignInDto) {
    // return await this.userService.userSignIn(input.email, input.password);
    return await this.service.userSignIn(input.email, input.password);
  }
}
