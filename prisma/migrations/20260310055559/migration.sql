/*
  Warnings:

  - Added the required column `width` to the `Gallary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gallary" ADD COLUMN     "width" INTEGER NOT NULL;
