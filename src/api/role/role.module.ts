import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/database/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleController, RoleService, RoleRepository],
  exports: [RoleController],
})
export class RoleModule {}
