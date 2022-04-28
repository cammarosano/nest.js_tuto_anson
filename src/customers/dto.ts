import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCustomerDTO {
	@IsNumber()
	id: number;

	@IsNotEmpty()
	name: string;
}
