import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    
    constructor(private authService:AuthService){ }

    @Post('Login')
    async login(
        @Body() data: LoginDTO
    ){
        const usertoken = await this.authService.validateUser(data);

        if(!usertoken) throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED); 
        return usertoken;
    }

}
