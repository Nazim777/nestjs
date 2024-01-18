import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserdto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    getallUsers(): Promise<User[]>{
       return this.usersRepository.find()
    }



    createUser(CreateUserdto:CreateUserdto){
        const newUser = this.usersRepository.create(CreateUserdto)
        return this.usersRepository.save(newUser)

    }
    async updateUser(createUserDto:CreateUserdto,id:number):Promise<User>{
        await this.usersRepository.update(id,createUserDto);
        return this.usersRepository.findOne({ where: { id } });
    }

    getSingleUser(userid:number):Promise<User>{
        return this.usersRepository.findOne({where:{id:userid}})
    }
   async deleteSingleUser(id:number){
    await this.usersRepository.delete(id)
        return{
            msg:'user deleted successfully',
        }
    }

    getUserbyEmail(email:string):Promise<User>{
        return this.usersRepository.findOne({where:{email}})
    }

}
