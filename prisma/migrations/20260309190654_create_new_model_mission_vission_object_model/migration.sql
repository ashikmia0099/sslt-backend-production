-- CreateTable
CREATE TABLE "MissionVissionObject" (
    "id" TEXT NOT NULL,
    "Selected_type" "BannerType" NOT NULL,
    "Image" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "dynamicDescriptions" JSONB,

    CONSTRAINT "MissionVissionObject_pkey" PRIMARY KEY ("id")
);
