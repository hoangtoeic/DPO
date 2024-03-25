import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RequestContextMiddleware } from 'src/common/middlewares/requestContext.middleware';
import { RoleModule } from './role/role.module';
import { UploadModule } from './upload/upload.module';
import { TestModule } from './testAPI/test.module';
@Module({
  imports: [TestModule, RoleModule, UploadModule],
})
export class ApiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
