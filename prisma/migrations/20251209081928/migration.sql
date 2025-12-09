/*
  Warnings:

  - You are about to drop the column `userId` on the `course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_userId_fkey";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "userId";
