import { Router } from "express";

import Controller from "../controller/UserController";

export default class Routes {
	private feature = "/user";

	public init(): Router {
		const routes = Router();

		const controller = new Controller();

		routes.get(`${this.feature}`, controller.index);
		routes.get(`${this.feature}/:uid`, controller.view);
		routes.post(`${this.feature}`, controller.store);

		return routes;
	}
}
