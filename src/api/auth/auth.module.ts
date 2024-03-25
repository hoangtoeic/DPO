import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthController, AuthService, AuthRepository],
  exports: [AuthController],
})
export class AuthModule {}
