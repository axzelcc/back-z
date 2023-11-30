import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { ConfigModule } from '../common/config.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    ConfigModule
  ],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})

export class ClientModule {}
