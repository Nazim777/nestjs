import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserdto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string
}