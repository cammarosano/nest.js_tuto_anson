import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional } from "class-validator";

export class CreateCustomerDTO {
	@IsNotEmpty()
	name: string;

	@IsEmail()
	email: string;
}

export class UpdateCustomerDTO {

	@IsOptional()
	name?: string;

	@IsOptional()
	@IsEmail()
	email?: string;
}
