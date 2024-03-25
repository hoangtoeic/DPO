import { Module } from '@nestjs/common';
import UploadController from './upload.controler';
import UploadService from './update.service';

@Module({
  providers: [UploadController, UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
