import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerORM {
	@PrimaryGeneratedColumn()
	id: number;

	@Column(
		{
			nullable: true
		}
	)
	name: string;

	@Column()
	email: string;

	@Column()
	createdAt: Date;
}
