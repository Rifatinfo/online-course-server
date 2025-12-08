export interface ICourseCreate {
  title: string;
  slug: string;
  smallDescription: string;
  description: string;
  thumbnail: string[];
  duration: number;
  price: number;
  category: string;
  course_Status: string;
  userId: string; // current logged user
}
