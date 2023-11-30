import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';
import { ProductModule } from './product/product.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './common/config.module';

@Module({
  imports: [
    ConfigModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Client],
      synchronize: true,
    }), 
    ClientModule, ProductModule, SaleDetailModule, AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
