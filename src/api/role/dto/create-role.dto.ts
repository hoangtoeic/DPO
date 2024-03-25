import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsUUID()
  role: string;

  @ApiProperty()
  @IsUUID()
  fleetManager: string;
}
