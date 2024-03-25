import { SetMetadata } from '@nestjs/common';

export enum StatusTransPortCompanyEnum {
  ACTIVED = 'ACTIVED',
  DEACTIVED = 'DEACTIVED',
  DELETED = 'DELETED',
}
export const status = (...status: StatusTransPortCompanyEnum[]) =>
  SetMetadata('status', status);
