import { Module } from '@nestjs/common';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestController],
  exports: [TestController],
})
export class TestModule {}
