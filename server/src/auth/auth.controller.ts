import { Controller, Res,  Post, Body } from '@nestjs/common';
import { CustomerService } from '../user/user.service';
import { LoginDTO } from './dto/login.dto';
@Controller('auth')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // add a customer
    @Post('/login')
    async login(@Res() res, @Body() loginDTO: LoginDTO) {
        //findOne user from customer service, compare password, create token, return to user
      
    }

}