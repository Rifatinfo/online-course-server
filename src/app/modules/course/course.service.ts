import { prisma } from "../../config/db"
import { ICourseCreate } from "./course.interface"

const CourseService = {
   async createCourse(data : ICourseCreate) {
       const course = await prisma.course.create({
        data : {
            title : data.title,
            slug : data.slug,
            smallDescription : data.smallDescription,
            description : data.description,
            thumbnail : data.thumbnail,
            
        }
       })
   }
}

export const courseService = {
   CourseService
}