/*
  Warnings:

  - Changed the type of `JoiningDate` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "JoiningDate",
ADD COLUMN     "JoiningDate" TIMESTAMP(3) NOT NULL;
