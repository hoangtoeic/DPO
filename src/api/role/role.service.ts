import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { Role } from 'src/database/entities/role.entity';
import { RoleEnum } from './enum/role.enum';

@Injectable()
export class RoleService {
  constructor(private repository: RoleRepository) {}

  async getRole(role: RoleEnum): Promise<Role> {
    return await this.repository.findByRole(role);
  }
}
