/*
  Warnings:

  - You are about to drop the column `craetedAt` on the `Details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Details" DROP COLUMN "craetedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
