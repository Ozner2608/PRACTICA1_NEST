import { ApiProperty } from "@nestjs/swagger";
import { UpdateUserDto } from "./update-user.dto";

export class CreateUserDto {
    @ApiProperty({ required: true, example: 'usuario@empresa.com'})

    email: string;

    @ApiProperty({ required: true, example: 'John Doe'})

    name: string; 

    username?: string;

    @ApiProperty({required: true, example: 'password23'})

    password: string; 

    @ApiProperty({required: true, example: 1, description: 'ID del Tenant'})
    tenantID: number; 
}
