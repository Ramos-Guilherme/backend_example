import {
	Entity,
	BaseEntity,
	PrimaryColumn,
	Column,
	BeforeInsert,
    BeforeUpdate,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "users" })
export class User extends BaseEntity {
	@PrimaryColumn()
	uid?: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	birthdate: Date;

	@Column({ name: "created_at" })
	createdAt?: Date;

	@Column({ name: "updated_at" })
	updatedAt?: Date;

	constructor(name: string, email: string, birthdate: Date, uid?: string) {
		super();
		this.uid = uid;
		this.name = name;
		this.email = email;
		this.birthdate = birthdate;
	}

	@BeforeInsert()
	private beforeInsert() {
		this.uid = uuid();
        this.createdAt = new Date();
        this.updatedAt = new Date();
	}

    @BeforeUpdate()
	private beforeUpdate() {
        this.updatedAt = new Date();
	}
}
