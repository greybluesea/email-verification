/*
  Warnings:

  - You are about to drop the column `secondName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" RENAME COLUMN "secondName" TO  "alias";
