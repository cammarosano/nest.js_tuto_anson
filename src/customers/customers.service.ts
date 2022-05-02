import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDTO, UpdateCustomerDTO } from './dto';
import { CustomerORM } from './typeorm/CustomerORM';

@Injectable()
export class customersService {
	constructor(
		@InjectRepository(CustomerORM)
		private customersRepository: Repository<CustomerORM>
	) {}

	findAll(): Promise<CustomerORM[]> {
		return this.customersRepository.find();
	}

	findById(id: number): Promise<CustomerORM> {
		return this.customersRepository.findOne(id);
	}

	newCustomer(customer: CreateCustomerDTO): CustomerORM {
		const new_customer = new CustomerORM();
		Object.assign(new_customer, customer);
		new_customer.createdAt = new Date();
		
		this.customersRepository.save(new_customer);
		return new_customer;
	}

	async updateCustomer(id: number, data: UpdateCustomerDTO):
	Promise<CustomerORM> {
		const customerToUpdate = await this.customersRepository.findOne(id);
		Object.assign(customerToUpdate, data);
		await this.customersRepository.save(customerToUpdate);
		return (customerToUpdate);
	}

	async deleteCustomer(id:number) {
		const customerToDelete = await this.customersRepository.findOne(id);
		if (customerToDelete)
			return await this.customersRepository.remove(customerToDelete);
		return (undefined);
	}
}
