-- CreateTable
CREATE TABLE "aboutHero" (
    "id" TEXT NOT NULL,
    "selected_type" "BannerType" NOT NULL,
    "title" TEXT,
    "shortOverview" TEXT,
    "descripiton" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aboutHero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aboutThreeBanner" (
    "id" TEXT NOT NULL,
    "selected_type" "ThreeBannerType" NOT NULL,
    "BannerTitle" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Image" TEXT NOT NULL,

    CONSTRAINT "aboutThreeBanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lastBanner" (
    "id" TEXT NOT NULL,
    "selected_type" "BannerType" NOT NULL,
    "title" TEXT,
    "shortOverview" TEXT,
    "descripiton" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lastBanner_pkey" PRIMARY KEY ("id")
);
