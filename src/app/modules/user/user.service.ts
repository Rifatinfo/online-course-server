import { prisma } from "../../config/db";
import { createStudentInput } from "./user.interface";
import bcrypt from "bcryptjs";

 const createStudent = async (payload: createStudentInput) => {
  const hashPassword = await bcrypt.hash(payload.password, 10);

  // Start transaction
  const result = await prisma.$transaction(async (tx) => {
    // 1 Create the user
    const user = await tx.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: hashPassword,
        role: "STUDENT",
      },
    });

    // 2 Create the student profile linked to the user email
    const student = await tx.student.create({
      data: {
        email: user.email,  // link via email
        name: payload.name,
        phone: payload.phone,
        address: payload.address,
      },
    });

    return { user, student };
  });

  return result;
};

export const UserService = {
    createStudent
}   

