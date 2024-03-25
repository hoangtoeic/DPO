import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AuthModule } from './api/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ApiModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' }, // Optionally, set expiration time
      }),
      inject: [ConfigService],
    }),
  ],
  // imports: [TestModule],
})
export class AppModule {}
