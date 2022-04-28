import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { customersService } from './customers.service';
import { CreateCustomerDTO } from './dto';

@Controller('customers')
export class customersController {
	constructor(private readonly customersService: customersService) {}

	@Get()
	findAll() {
		return this.customersService.findAll();
	}

	@Get(':id')
	findById(@Param('id', ParseIntPipe) id: number) {
		const customer = this.customersService.findById(id);
		if (customer)
			return customer;
		throw new HttpException("he/she ain't here...", HttpStatus.NOT_FOUND);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createCustomer(@Body() body: CreateCustomerDTO){
		return this.customersService.newCustomer(body);
	}
}
