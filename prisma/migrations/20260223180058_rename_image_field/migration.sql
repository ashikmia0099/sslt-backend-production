/*
  Warnings:

  - You are about to drop the column `Choose_Event_Image_One` on the `ThreeBanner` table. All the data in the column will be lost.
  - Added the required column `Image` to the `ThreeBanner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ThreeBanner" DROP COLUMN "Choose_Event_Image_One",
ADD COLUMN     "Image" TEXT NOT NULL;
