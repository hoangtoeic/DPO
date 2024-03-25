import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from 'src/api/role/enum/role.enum';
import {
  IsEmail,
  IsString,
  IsOptional,
  Matches,
  IsPhoneNumber,
  IsEnum,
} from 'class-validator';
import { ThrowErrorEnum } from 'src/common/enum/throw-error.enum';

export class UserSignUpDto {
  @ApiProperty()
  @IsEmail({}, { message: ThrowErrorEnum.EMAIL_INVALIDATED })
  email: string;

  @ApiProperty()
  @IsString()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, {
    // Kiểm tra mật khẩu có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
    message: ThrowErrorEnum.PASSWORD_TO_WEAK,
  })
  password: string;

  @ApiProperty()
  @IsString()
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsPhoneNumber()
  helpingPersion: string;

  @ApiProperty()
  @IsString()
  deviceId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address1?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address2?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  postalCode?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  avatar?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  language?: string;

  @ApiProperty()
  @IsEnum(RoleEnum)
  @IsOptional()
  role?: RoleEnum;
}
