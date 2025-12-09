import { CourseLevel, CourseStatus } from "../../../generated/prisma/enums";

export interface ICourseCreate {
  title: string;
  slug: string;
  smallDescription: string;
  description: string;
  thumbnail: string;
  duration: number;
  price: number;
  category: CourseLevel;       
  course_Status: CourseStatus;
  userId: string; // current logged user
}
