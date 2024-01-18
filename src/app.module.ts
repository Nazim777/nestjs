import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UsersModule } from './users/users.module';
import { AppService } from "./app.service";
import { User } from "./users/entity/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';



@Module({
    imports:[UsersModule,TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'nestjs',
        entities: [User],
        synchronize: true,
      }), AuthModule, ProfileModule,],
    controllers:[AppController],
    providers:[AppService]
})
export class AppModule{}