import { IsEmail, MinLength, MaxLength} from 'class-validator';
import { Transform } from 'class-transformer'

export class LoginAuthDto {
    
    @IsEmail()
    email: string;

    @Transform(({value})=>value.trim())
    @MinLength(6)
    @MaxLength(30)
    password: string;
}
