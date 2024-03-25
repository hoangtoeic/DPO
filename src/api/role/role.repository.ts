import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from 'src/database/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from './enum/role.enum';

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>,
  ) {}
  async findByRole(role: RoleEnum): Promise<Role | undefined> {
    return await this.repository.findOne({ where: { name: role } });
  }
}
