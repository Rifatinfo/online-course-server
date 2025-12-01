import { Router } from "express";
import { UserRouters } from "../modules/user/user.routes";


export const router = Router();

const moduleRouters = [
    {
        path : "/user",
        route : UserRouters
    }
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})