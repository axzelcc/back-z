import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    return await this.clientRepository.save(createClientDto);
  }

  async findAll() {
    return await this.clientRepository.find();
  }
  
  async findOne(email: string): Promise<Client> {
    const client = await this.clientRepository.findOne({where: {email: ILike(`%${email}%`)}});
    if(!client) throw new HttpException('USER_NOT_FOUND', 404)
    return client;
  }
  
  async findByEmailWithPassword(email: string): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: {email: ILike(`%${email}%`)},
      select: ['id','firstName','lastName','email','role','password']
    });
    if(!client) throw new HttpException('USER_NOT_FOUND', 404)
    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
