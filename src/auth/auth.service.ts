import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from '../client/client.service';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly clientService: ClientService,
    private readonly jwtService:JwtService
  ) {}

  async register({ firstName, lastName ,password, email }: RegisterAuthDto) {
    
    const plaintToHash = await hash(password, 10);
    
    await this.clientService.create({
      firstName,
      lastName,
      password: plaintToHash,
      email: email.toLowerCase(),
    });

    return {
      name: firstName + ' ' + lastName,
      email: email
    }
  }

  async login(loginAuthDto: LoginAuthDto){ 
    const {email, password, } = loginAuthDto;
    
    const findClient = await this.clientService.findByEmailWithPassword(email);
    if(!findClient) throw new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findClient.password);

    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const payload = {email: findClient.email, role: findClient.role};

    const token = await this.jwtService.signAsync(payload);

    const data = {
      email,
      token,
    };

    return  data;
  }
}
