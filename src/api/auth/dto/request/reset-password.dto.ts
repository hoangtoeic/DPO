import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    // Kiểm tra mật khẩu có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
    message:
      'Password too weak. Must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.',
  })
  newPassword?: string;

  @ApiProperty()
  @IsString()
  otp?: string;
}
