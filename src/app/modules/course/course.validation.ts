import { z } from "zod";
import { CourseLevel, CourseStatus } from "../../../generated/prisma/enums";

export const courseSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(3),
  thumbnail: z.array(z.string()).nonempty(),
  duration: z.number().int().positive(),
  price: z.number().int().positive(),
  smallDescription: z.string().min(3).max(90),
  slug: z.string().min(3),
  category: z.enum(CourseLevel),
  course_Status: z.enum(CourseStatus),
});

export type CourseInput = z.infer<typeof courseSchema>;

