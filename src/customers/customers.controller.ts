import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { customersService } from './customers.service';
import { CreateCustomerDTO, UpdateCustomerDTO } from './dto';

@Controller('customers')
export class customersController {
	constructor(private readonly customersService: customersService) {}

	@Get()
	async findAll() {
		return await this.customersService.findAll();
	}

	@Get(':id')
	async findById(@Param('id', ParseIntPipe) id: number) {
		const customer = await this.customersService.findById(id);
		if (customer)
			return customer;
		throw new HttpException("he/she ain't here...", HttpStatus.NOT_FOUND);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createCustomer(@Body() body: CreateCustomerDTO){
		return this.customersService.newCustomer(body);
	}

	@Put(':id')
	@UsePipes(ValidationPipe)
	async updateCustomer(
		@Param('id', ParseIntPipe) id: number,
		@Body() body: UpdateCustomerDTO){
		return await this.customersService.updateCustomer(id, body);
	}

	@Delete(':id')
	async deleteCustomer(@Param('id', ParseIntPipe) id: number) {
		const deleted = await this.customersService.deleteCustomer(id);
		if (deleted)
			return deleted;
		throw new HttpException("customer not found, nothing deleted",
								HttpStatus.NOT_FOUND);
	}
}
