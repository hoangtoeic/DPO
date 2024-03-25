import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ required: true })
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phoneNumber: string;
}
