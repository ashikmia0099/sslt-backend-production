/*
  Warnings:

  - Changed the type of `ImagePostType` on the `BannerSecond` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ImagePostTypeEnum" AS ENUM ('SingleImage', 'DualImage');

-- AlterTable
ALTER TABLE "BannerSecond" DROP COLUMN "ImagePostType",
ADD COLUMN     "ImagePostType" "ImagePostTypeEnum" NOT NULL;

-- DropEnum
DROP TYPE "ImagePostType";
