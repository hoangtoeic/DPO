import { SetMetadata } from '@nestjs/common';

export enum RoleEnum {
  ROOT = 'ROOT',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  TRANSPORT_COMPANY = 'TRANSPORT_COMPANY',
  FLEET_MANAGER = 'FLEET_MANAGER',
  DRIVER = 'DRIVER',
  END_USER = 'END_USER',
}

export const role = (...role: RoleEnum[]) => SetMetadata('role', role);
