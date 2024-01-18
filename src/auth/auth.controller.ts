import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

   
    @UseGuards(AuthGuard('local'))
    @Post("/login")
   async loginUser(@Request() req:any){
    // console.log("user",req.user)
    return this.authService.login(req.user)
    }


 @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req:any) {
    return req.user;
  }
}
