import { APP_FILTER } from "@nestjs/core";
import { ApiProperty } from "@nestjs/swagger";


export class LoginDTO{
    @ApiProperty({required:true})
    email: string; 

    @ApiProperty({required: true})
    password: string;

}