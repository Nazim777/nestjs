import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('profile')
export class ProfileController {
    @Get()
    @UseGuards(JwtAuthGuard)
    profile(@Request() req:any){
        return {
            msg:'hello from protected route!',
            user:req.user
        }

    }
}
