import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UsersService } from "./users.service";
import { CreateUserdto } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
    getUsers(){
        return this.userService.getallUsers()

    }

    @Post()
    postUser(@Body() createUserDto:CreateUserdto){
        return this.userService.createUser(createUserDto)
        
    }

    @Patch("/:userid")
    updateUser(@Body() createUserDto:CreateUserdto, @Param("userid",ParseIntPipe) userid:number){
        return this.userService.updateUser(createUserDto,userid)
    }

    @Get("/:userid")
    getUser(@Param("userid",ParseIntPipe) userid:number){
        return this.userService.getSingleUser(userid)
        

    }
    @Delete("/:userid")
    deleteUser(@Param("userid",ParseIntPipe) userid:number){
      return  this.userService.deleteSingleUser(userid)
    }
}
