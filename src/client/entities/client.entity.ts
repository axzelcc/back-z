import { Role } from '../../common/enums/rol.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 60 })
    firstName: string;
  
    @Column({ type: 'varchar', length: 60 })
    lastName: string;
  
    @Column({type: 'enum', default: Role.CLIENT, enum: Role})
    role: Role;

    @Column({unique: true, type: 'varchar', length: 120})
    email: string;

    @Column({type: 'varchar', length: 120, select: false})
    password: string;
}
