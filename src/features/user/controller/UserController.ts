import { Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

import { differenceInYears } from "date-fns";

export default class UserController {
	public async index(req: Request, res: Response) {
		const users = await User.find();

		return res.json(users);
	}

	public async view(req: Request, res: Response) {
		const { uid } = req.params;

		try {
			const user = await User.findOne(uid);
			return res.json(user);
		} catch (error) {
			return res.status(404).send("Usuario não encontrado");
		}
	}

	public async store(req: Request, res: Response) {
		const { name, email, birthdate } = req.body;

		const today = new Date();
		const data_nasc = new Date(birthdate);

		const idade = differenceInYears(today, data_nasc);
        console.log(idade);

		try {
			const result = await new User(name, email, birthdate).save();
			return res.json(result);
		} catch (error) {
			return res.status(400).send("Não foi possível criar o usuário");
		}
	}

	public async update(req: Request, res: Response) {}

	public async destroy(req: Request, res: Response) {}
}
