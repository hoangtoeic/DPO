import { Module } from '@nestjs/common';
import { SESService } from './ses.service';

@Module({
  imports: [],
  providers: [SESService],
  exports: [SESService],
})
export class SESModule {}
