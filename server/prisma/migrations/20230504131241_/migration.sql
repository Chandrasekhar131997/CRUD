-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('superadmin', 'admin', 'user');

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "pepoleHubId" INTEGER NOT NULL,
    "employeeCode" INTEGER NOT NULL,
    "employeeName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "EmailID" TEXT NOT NULL,
    "PersonalPhoneNumber" INTEGER NOT NULL,
    "PersonalEmailID" TEXT NOT NULL,
    "Designation" TEXT NOT NULL,
    "JoiningDate" INTEGER NOT NULL,
    "Manager" TEXT NOT NULL,
    "HRBP" TEXT NOT NULL,
    "Unit" TEXT NOT NULL,
    "Function" TEXT NOT NULL,
    "SubFunction" TEXT NOT NULL,
    "EmplymentType" TEXT NOT NULL,
    "Grade" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
