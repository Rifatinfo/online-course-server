import { Router } from "express";
import { UserRouters } from "../modules/user/user.routes";
import { AdminRouters } from "../modules/admin/admin.routes";
import { AuthRouters } from "../modules/auth/auth.routes";
import { CourseRouters } from "../modules/course/course.routes";


export const router = Router();

const moduleRouters = [
    {
        path : "/user",
        route : UserRouters
    },
    {
        path : "/admin",
        route : AdminRouters
    },
    {
        path : "/auth",
        route : AuthRouters
    },
    {
        path : "/course",
        route : CourseRouters
    },
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})