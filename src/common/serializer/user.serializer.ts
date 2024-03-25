import { Exclude, Expose, Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export const adminUserGroupsForSerializing: string[] = ['admin'];
export const ownerUserGroupsForSerializing: string[] = ['owner'];
export const defaultUserGroupsForSerializing: string[] = ['timestamps'];

export class ModelSerializer {
  id: number;
  createdAt: Date;
  [key: string]: any;
}

/**
 * user serializer
 */
export class UserSerializer extends ModelSerializer {
  @Expose({
    groups: [
      ...ownerUserGroupsForSerializing,
      ...adminUserGroupsForSerializing,
    ],
  })
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @Transform(({ value }) => (value !== 'null' ? value : ''))
  address: string;

  @ApiProperty()
  @Expose({
    groups: ownerUserGroupsForSerializing,
  })
  isTwoFAEnabled: boolean;

  @ApiProperty()
  @Transform(({ value }) => (value !== 'null' ? value : ''))
  contact: string;

  @ApiProperty()
  @Transform(({ value }) => (value !== 'null' ? value : ''))
  avatar: string;

  @Exclude({
    toClassOnly: true,
  })
  roleId: number;

  @Exclude({
    toClassOnly: true,
  })
  tokenValidityDate: Date;

  @ApiPropertyOptional()
  @Expose({
    groups: defaultUserGroupsForSerializing,
  })
  createdAt: Date;

  @ApiPropertyOptional()
  @Expose({
    groups: defaultUserGroupsForSerializing,
  })
  updatedAt: Date;
}
