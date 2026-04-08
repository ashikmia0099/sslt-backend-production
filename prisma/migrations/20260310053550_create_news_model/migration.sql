-- CreateTable
CREATE TABLE "newsAndUpdate" (
    "id" TEXT NOT NULL,
    "newsTitle" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "newsAndUpdate_pkey" PRIMARY KEY ("id")
);
