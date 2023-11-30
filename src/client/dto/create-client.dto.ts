import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from '../../common/enums/rol.enum';

export class CreateClientDto {
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;
    
    @IsEmail()
    email: string;
    
    @IsNotEmpty()        
    password: string;

}
