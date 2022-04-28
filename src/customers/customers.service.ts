import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from './dto';
import { Customer } from './types/Customer';

@Injectable()
export class customersService {
	private customers: Customer[] = [
		{
			id: 1,
			name: "Jay",
			createdAt: new Date()
		},
		{
			id: 2,
			name: "John",
			createdAt: new Date()
		}
	]

	findAll(): Customer[] {
		return this.customers;
	}

	findById(id: number): Customer {
		return this.customers.find(customer => customer.id === id);
	}

	newCustomer(customer: CreateCustomerDTO): Customer{
		const new_customer: Customer = {
			"id": customer.id,
			"name": customer.name,
			"createdAt": new Date()
		}
		this.customers.push(new_customer);
		return new_customer;
	}
	
}
