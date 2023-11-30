import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: 'process.env',
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
