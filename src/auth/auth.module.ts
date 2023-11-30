import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ClientModule } from '../client/client.module';
import { ConfigModule } from '../common/config.module';

@Module({
  imports: [
    ClientModule,    
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '20h'}
    }),
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})

export class AuthModule {}
