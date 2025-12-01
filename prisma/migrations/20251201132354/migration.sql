/*
  Warnings:

  - You are about to drop the column `userId` on the `student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_userId_fkey";

-- DropIndex
DROP INDEX "student_userId_key";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_email_fkey" FOREIGN KEY ("email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
