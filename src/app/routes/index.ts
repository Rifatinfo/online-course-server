import { Router } from "express";
import { UserRouters } from "../modules/user/user.routes";
import { AdminRouters } from "../modules/admin/admin.routes";


export const router = Router();

const moduleRouters = [
    {
        path : "/user",
        route : UserRouters
    },
    {
        path : "/admin",
        route : AdminRouters
    }
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})