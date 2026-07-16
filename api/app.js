// src/app.ts
import express5 from "express";

// src/modules/Home_Api/Hero/Hero.router.ts
import express from "express";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "postgresql",
  "inlineSchema": '// hero model \nmodel aboutHero {\n  id            String     @id @default(uuid())\n  selected_type BannerType\n  title         String?\n  shortOverview String?\n  descripiton   String?\n  image         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n}\n\n// three banner type\n\nmodel aboutThreeBanner {\n  id            String          @id @default(uuid())\n  selected_type ThreeBannerType\n  BannerTitle   String\n  Description   String\n  Image         String\n}\n\n// Last banner model \n\nmodel lastBanner {\n  id            String     @id @default(uuid())\n  selected_type BannerType\n  title         String?\n  descripiton   String?\n  image         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n}\n\nenum ImagePostTypeEnum {\n  SingleImage\n  DualImage\n}\n\nenum BannerType {\n  Text\n  Image\n}\n\nenum ThreeBannerType {\n  BannerOne\n  BannerTWo\n  BannerThree\n}\n\nenum FoundingMemberType {\n  Pesident\n  Secretary\n  Founding\n}\n\nenum ContactDetails {\n  Phone\n  Email\n  Address\n  OpeningDayTime\n}\n\nenum DonationTextOrAmount {\n  Text\n  Amount\n}\n\nenum UserType {\n  ADMIN\n  USER\n}\n\nenum SocialMediaName {\n  Facebook\n  Youtube\n  Twitter\n  Linkedin\n}\n\nmodel User {\n  id               String   @id @default(uuid())\n  name             String\n  email            String   @unique\n  password         String\n  role             UserType @default(USER)\n  isVerified       Boolean  @default(false)\n  emailVerifyToken String?\n}\n\nmodel ContactMedium {\n  id         String         @id @default(uuid())\n  postedType ContactDetails\n  FieldOne   String?\n  FieldTwo   String?\n}\n\nmodel DonationTextAndAmount {\n  id             String               @id @default(uuid())\n  selectedType   DonationTextOrAmount\n  Title          String?\n  Description    String?\n  NumberOfAmount Int?\n}\n\nmodel DonationMedium {\n  id             String  @id @default(uuid())\n  MFS_Bank_Name  String\n  MFS_Bank_Image String\n  shortOverview  String\n  FieldOne       String?\n  FieldTwo       String?\n}\n\nmodel DonationFAQ {\n  id          String @id @default(uuid())\n  Title_Name  String\n  Description String\n}\n\nmodel Footer {\n  id           String          @id @default(uuid())\n  socialLink   String\n  selectedType SocialMediaName\n}\n\nmodel Gallary {\n  id                  String @id @default(uuid())\n  width               Int\n  image               String\n  dynamicDescriptions Json?\n}\n\n// hero model \nmodel Hero {\n  id            String     @id @default(uuid())\n  postType      BannerType\n  title         String?\n  shortOverview String?\n  image         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n}\n\n// hero second model \n\nmodel BannerSecond {\n  id            String            @id @default(uuid())\n  ImagePostType ImagePostTypeEnum\n\n  // single image post filed\n  Doctor_Name       String?\n  Doctor_Position   String?\n  Working_place     String?\n  Description_Title String?\n  Description       String?\n  SingleImage       String?\n\n  dynamicDescriptions Json?\n\n  // dual image select filed \n  Choose_Dual_Type_Image_1 String?\n  Choose_Dual_Type_Image_2 String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\n// mission vission object model \n\nmodel MissionVissionObject {\n  id                  String     @id @default(uuid())\n  postType            BannerType\n  Image               String\n  Title               String\n  Description         String\n  dynamicDescriptions Json?\n}\n\n// three banner type\n\nmodel ThreeBanner {\n  id            String          @id @default(uuid())\n  Selected_type ThreeBannerType\n  BannerTitle   String\n  Description   String\n  Image         String\n}\n\n// popular medical desis model \n\nmodel PopularMedicalDecis {\n  id                  String  @id @default(uuid())\n  Desis_Name          String?\n  Choose_Image        String?\n  Description_Title   String?\n  Description         String?\n  dynamicDescriptions Json?\n}\n\n// communication and healthcare model \n\nmodel CommunicationAndHealthcare {\n  id                  String @id @default(uuid())\n  Title_Name          String\n  Overview            String\n  Choose_Image        String\n  DescriptionTitle    String\n  Description         String\n  dynamicDescriptions Json\n}\n\n// Hearing and healthcare model \n\nmodel HearingAndHealthcare {\n  id          String @id @default(uuid())\n  Title_Name  String\n  Description String\n}\n\n// Founding member message model \n\nmodel FoundingMemberMessage {\n  id                       String             @id @default(uuid())\n  ChooseFoundingMemberType FoundingMemberType\n  Name                     String\n  Description              String\n  Choose_Image             String\n}\n\n// our community event model \n\nmodel OurCommunityEvent {\n  id               String @id @default(uuid())\n  Event_Title      String\n  Event_Place_Name String\n  Description      String\n  Choose_Image     String\n}\n\nmodel newsAndUpdate {\n  id          String   @id @default(uuid())\n  newsTitle   String\n  image       String\n  description String\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"aboutHero":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"selected_type","kind":"enum","type":"BannerType"},{"name":"title","kind":"scalar","type":"String"},{"name":"shortOverview","kind":"scalar","type":"String"},{"name":"descripiton","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"aboutThreeBanner":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"selected_type","kind":"enum","type":"ThreeBannerType"},{"name":"BannerTitle","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"Image","kind":"scalar","type":"String"}],"dbName":null},"lastBanner":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"selected_type","kind":"enum","type":"BannerType"},{"name":"title","kind":"scalar","type":"String"},{"name":"descripiton","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"UserType"},{"name":"isVerified","kind":"scalar","type":"Boolean"},{"name":"emailVerifyToken","kind":"scalar","type":"String"}],"dbName":null},"ContactMedium":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"postedType","kind":"enum","type":"ContactDetails"},{"name":"FieldOne","kind":"scalar","type":"String"},{"name":"FieldTwo","kind":"scalar","type":"String"}],"dbName":null},"DonationTextAndAmount":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"selectedType","kind":"enum","type":"DonationTextOrAmount"},{"name":"Title","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"NumberOfAmount","kind":"scalar","type":"Int"}],"dbName":null},"DonationMedium":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"MFS_Bank_Name","kind":"scalar","type":"String"},{"name":"MFS_Bank_Image","kind":"scalar","type":"String"},{"name":"shortOverview","kind":"scalar","type":"String"},{"name":"FieldOne","kind":"scalar","type":"String"},{"name":"FieldTwo","kind":"scalar","type":"String"}],"dbName":null},"DonationFAQ":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Title_Name","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"}],"dbName":null},"Footer":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"socialLink","kind":"scalar","type":"String"},{"name":"selectedType","kind":"enum","type":"SocialMediaName"}],"dbName":null},"Gallary":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"width","kind":"scalar","type":"Int"},{"name":"image","kind":"scalar","type":"String"},{"name":"dynamicDescriptions","kind":"scalar","type":"Json"}],"dbName":null},"Hero":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"postType","kind":"enum","type":"BannerType"},{"name":"title","kind":"scalar","type":"String"},{"name":"shortOverview","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"BannerSecond":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"ImagePostType","kind":"enum","type":"ImagePostTypeEnum"},{"name":"Doctor_Name","kind":"scalar","type":"String"},{"name":"Doctor_Position","kind":"scalar","type":"String"},{"name":"Working_place","kind":"scalar","type":"String"},{"name":"Description_Title","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"SingleImage","kind":"scalar","type":"String"},{"name":"dynamicDescriptions","kind":"scalar","type":"Json"},{"name":"Choose_Dual_Type_Image_1","kind":"scalar","type":"String"},{"name":"Choose_Dual_Type_Image_2","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"MissionVissionObject":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"postType","kind":"enum","type":"BannerType"},{"name":"Image","kind":"scalar","type":"String"},{"name":"Title","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"dynamicDescriptions","kind":"scalar","type":"Json"}],"dbName":null},"ThreeBanner":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Selected_type","kind":"enum","type":"ThreeBannerType"},{"name":"BannerTitle","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"Image","kind":"scalar","type":"String"}],"dbName":null},"PopularMedicalDecis":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Desis_Name","kind":"scalar","type":"String"},{"name":"Choose_Image","kind":"scalar","type":"String"},{"name":"Description_Title","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"dynamicDescriptions","kind":"scalar","type":"Json"}],"dbName":null},"CommunicationAndHealthcare":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Title_Name","kind":"scalar","type":"String"},{"name":"Overview","kind":"scalar","type":"String"},{"name":"Choose_Image","kind":"scalar","type":"String"},{"name":"DescriptionTitle","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"dynamicDescriptions","kind":"scalar","type":"Json"}],"dbName":null},"HearingAndHealthcare":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Title_Name","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"}],"dbName":null},"FoundingMemberMessage":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"ChooseFoundingMemberType","kind":"enum","type":"FoundingMemberType"},{"name":"Name","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"Choose_Image","kind":"scalar","type":"String"}],"dbName":null},"OurCommunityEvent":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"Event_Title","kind":"scalar","type":"String"},{"name":"Event_Place_Name","kind":"scalar","type":"String"},{"name":"Description","kind":"scalar","type":"String"},{"name":"Choose_Image","kind":"scalar","type":"String"}],"dbName":null},"newsAndUpdate":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"newsTitle","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/lib/prisma.ts
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/modules/Home_Api/Hero/Hero.service.ts
var hero_post_service = async (data) => {
  const result = await prisma.hero.create({ data });
  return result;
};
var hero_get_service = async () => {
  const result = await prisma.hero.findMany();
  return result;
};
var updateHero = async (id, postType, title, shortOverview, image) => {
  try {
    const result = await prisma.hero.update({
      where: { id },
      data: {
        postType,
        title,
        shortOverview,
        image
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteHero = async (id) => {
  try {
    const existingId = await prisma.hero.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Hero not found");
    }
    const deleteData = await prisma.hero.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Hero doesn`t delete successfully");
  }
};
var heroSerivce = {
  hero_get_service,
  hero_post_service,
  updateHero,
  deleteHero
};

// src/config/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var cloudinary_default = cloudinary;

// src/config/SingleImageUploadInCloudinery.ts
var SingleImageUploadInCloudinery = async (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary_default.uploader.upload_stream({ folder: "image" }, (error, result) => {
      if (error) reject(error);
      else if (!result) reject(new Error("Cloudinary Upload Failed"));
      else resolve(result.secure_url);
    }).end(buffer);
  });
};

// src/modules/Home_Api/Hero/Hero.controller.ts
var Home_Hero_Post = async (req, res, next) => {
  try {
    const { postType, title, shortOverview, image } = req.body;
    let imageUrl = "";
    if (postType === "Image") {
      if (!req.file) {
        return res.status(400).json({ err: "Image is required of upload image" });
      }
      ;
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_default.uploader.upload_stream({ folder: "hero" }, (error, result2) => {
          if (error) reject(error);
          else if (!result2) reject(new Error("Cloudinary Upload Failed"));
          else resolve(result2);
        }).end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }
    const result = await heroSerivce.hero_post_service({
      postType,
      title: title ?? null,
      shortOverview: shortOverview ?? null,
      image: imageUrl
    });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var Home_Hero_Get = async (req, res, next) => {
  try {
    const result = await heroSerivce.hero_get_service();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var getDynamicData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await prisma.hero.findUnique({
      where: { id }
    });
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Data id not found"
      });
    }
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var updateHero2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { postType, title, shortOverview } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await heroSerivce.updateHero(id, postType, title, shortOverview, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "Hero update successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteHero2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await heroSerivce.deleteHero(id);
    res.status(200).json({
      status: true,
      message: "Hero image delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var heroController = {
  Home_Hero_Post,
  Home_Hero_Get,
  getDynamicData,
  updateHero: updateHero2,
  deleteHero: deleteHero2
};

// src/middleware/multer.ts
import multer from "multer";
var storage = multer.memoryStorage();
var upload = multer({ storage });
var multer_default = upload;

// src/modules/Home_Api/Hero/Hero.router.ts
var router = express.Router();
router.get("/", heroController.Home_Hero_Get);
router.post("/", multer_default.single("image"), heroController.Home_Hero_Post);
router.patch("/:id", multer_default.single("image"), heroController.updateHero);
router.delete("/:id", heroController.deleteHero);
var heroRouter = router;

// src/app.ts
import cors from "cors";

// src/modules/Home_Api/Hero_sec/HeroSecond.router.ts
import { Router as Router2 } from "express";

// src/modules/Home_Api/Hero_sec/HeroSecond.service.ts
var HeroSecondServiceGet = async () => {
  try {
    const getAllData = await prisma.bannerSecond.findMany();
    return getAllData;
  } catch (err) {
    throw err;
  }
};
var HeroSecondServicePost = async (Doctor_Name, Doctor_Position, Working_place, Description_Title, Description, dynamicDescriptions, mainImageUrl, ImagePostType, dualImage1, dualImage2) => {
  try {
    if (!ImagePostType) {
      throw new Error("ImagePostType is required");
    }
    const result = await prisma.bannerSecond.create({
      data: {
        Doctor_Name,
        Doctor_Position,
        Working_place,
        Description_Title,
        Description,
        ImagePostType,
        SingleImage: ImagePostType === "SingleImage" ? mainImageUrl || null : null,
        Choose_Dual_Type_Image_1: ImagePostType === "DualImage" ? dualImage1 || null : null,
        Choose_Dual_Type_Image_2: ImagePostType === "DualImage" ? dualImage2 || null : null,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var HeroSecondControllerPatch = async (id, Doctor_Name, Doctor_Position, Working_place, Description_Title, Description, dynamicDescriptions, mainImageUrl, ImagePostType, dualImage1, dualImage2) => {
  try {
    if (!ImagePostType) {
      throw new Error("ImagePostType is required");
    }
    const updateData = {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType,
      dynamicDescriptions
    };
    if (ImagePostType === "SingleImage") {
      updateData.SingleImage = mainImageUrl || null;
    }
    if (ImagePostType === "DualImage") {
      updateData.Choose_Dual_Type_Image_1 = dualImage1 || null;
      updateData.Choose_Dual_Type_Image_2 = dualImage2 || null;
    }
    const result = await prisma.bannerSecond.update({
      where: { id },
      data: updateData
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteHeroSecond = async (id) => {
  try {
    const existingId = await prisma.bannerSecond.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Second hero not found");
    }
    const deleteData = await prisma.bannerSecond.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw err;
  }
};
var HeroSecondService = {
  HeroSecondServicePost,
  HeroSecondServiceGet,
  HeroSecondControllerPatch,
  deleteHeroSecond
};

// src/modules/Home_Api/Hero_sec/HeroSecond.controller.ts
var HeroSecondControllerPost = async (req, res, next) => {
  try {
    const {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType
    } = req.body;
    let dynamicDescriptions = [];
    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }
    const files = req.files;
    let mainImageUrl = "";
    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      if (file) {
        mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    let dynamicImageUrls = [];
    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        if (file) {
          const url = await SingleImageUploadInCloudinery(file.buffer);
          dynamicImageUrls.push(url);
        }
      }
    }
    let dualImage1 = "";
    let dualImage2 = "";
    if (files?.Choose_Dual_Type_Image_1?.length) {
      const file = files.Choose_Dual_Type_Image_1[0];
      if (file) {
        dualImage1 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    if (files?.Choose_Dual_Type_Image_2?.length) {
      const file = files.Choose_Dual_Type_Image_2[0];
      if (file) {
        dualImage2 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    const finalDescriptions = dynamicDescriptions.map(
      (item, index) => ({
        title: item.title,
        description: item.description,
        image: dynamicImageUrls[index] || null
      })
    );
    const data = await HeroSecondService.HeroSecondServicePost(
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      finalDescriptions,
      mainImageUrl,
      ImagePostType,
      dualImage1,
      dualImage2
    );
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};
var HeroSecondControllerPatch2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }
    const {
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      ImagePostType
    } = req.body;
    let dynamicDescriptions = [];
    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }
    const files = req.files;
    let mainImageUrl = "";
    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      if (file) {
        mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    let dynamicImageUrls = [];
    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        if (file) {
          const url = await SingleImageUploadInCloudinery(file.buffer);
          dynamicImageUrls.push(url);
        }
      }
    }
    let dualImage1 = "";
    let dualImage2 = "";
    if (files?.Choose_Dual_Type_Image_1?.length) {
      const file = files.Choose_Dual_Type_Image_1[0];
      if (file) {
        dualImage1 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    if (files?.Choose_Dual_Type_Image_2?.length) {
      const file = files.Choose_Dual_Type_Image_2[0];
      if (file) {
        dualImage2 = await SingleImageUploadInCloudinery(file.buffer);
      }
    }
    const finalDescriptions = dynamicDescriptions.map(
      (item, index) => ({
        title: item.title,
        description: item.description,
        image: dynamicImageUrls[index] || null
      })
    );
    const data = await HeroSecondService.HeroSecondControllerPatch(
      id,
      Doctor_Name,
      Doctor_Position,
      Working_place,
      Description_Title,
      Description,
      finalDescriptions,
      mainImageUrl,
      ImagePostType,
      dualImage1,
      dualImage2
    );
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};
var HeroSecondControllerGet = async (req, res, next) => {
  try {
    const result = await HeroSecondService.HeroSecondServiceGet();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var deleteSecondHero = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await HeroSecondService.deleteHeroSecond(id);
    res.status(200).json({
      status: true,
      message: "Hero image delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var HeroSecondController = {
  HeroSecondControllerPost,
  HeroSecondControllerGet,
  HeroSecondControllerPatch: HeroSecondControllerPatch2,
  deleteSecondHero
};

// src/modules/Home_Api/Hero_sec/HeroSecond.router.ts
var router2 = Router2();
router2.get("/", HeroSecondController.HeroSecondControllerGet);
router2.post(
  "/",
  multer_default.fields([
    { name: "image", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_1", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_2", maxCount: 1 }
  ]),
  HeroSecondController.HeroSecondControllerPost
);
router2.patch(
  "/:id",
  multer_default.fields([
    { name: "image", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_1", maxCount: 1 },
    { name: "Choose_Dual_Type_Image_2", maxCount: 1 }
  ]),
  HeroSecondController.HeroSecondControllerPatch
);
router2.delete("/:id", HeroSecondController.deleteSecondHero);
var heroSecondRouter = router2;

// src/modules/Home_Api/Three_Banner/Three_Banner.router.ts
import { Router as Router3 } from "express";

// src/modules/Home_Api/Three_Banner/utils/ThreeBannerCloudinery.ts
var ThreeBannerImageUploadInCloudinery = async (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary_default.uploader.upload_stream({ folder: "hero" }, (error, result) => {
      if (error) reject(error);
      else if (!result) reject(new Error("Cloudinary Upload Failed"));
      else resolve(result.secure_url);
    }).end(buffer);
  });
};

// src/modules/Home_Api/Three_Banner/Three_Banner.service.ts
var ThreeBannerServicePost = async (data) => {
  try {
    if (!data.ImageBuffer) {
      throw new Error("Image is Required");
    }
    let ImageUrl = await ThreeBannerImageUploadInCloudinery(
      data.ImageBuffer
    );
    const result = await prisma.threeBanner.create({
      data: {
        Selected_type: data.Selected_type,
        BannerTitle: data.BannerTitle,
        Description: data.Description,
        Image: ImageUrl
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var ThreeBannerServiceGet = async () => {
  try {
    const result = await prisma.threeBanner.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var updateThreeBanner = async (id, Selected_type, BannerTitle, Description, Image) => {
  try {
    const result = await prisma.threeBanner.update({
      where: { id },
      data: {
        Selected_type,
        BannerTitle,
        Description,
        Image
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deletethreeBanner = async (id) => {
  try {
    const existingId = await prisma.threeBanner.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Three banner not found");
    }
    const deleteData = await prisma.threeBanner.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Three banner doesn`t delete successfully");
  }
};
var ThreeBannerService = {
  ThreeBannerServicePost,
  ThreeBannerServiceGet,
  updateThreeBanner,
  deletethreeBanner
};

// src/modules/Home_Api/Three_Banner/Three_Banner.controller.ts
var ThreeBannerControllerPost = async (req, res, next) => {
  try {
    const result = await ThreeBannerService.ThreeBannerServicePost({
      ...req.body,
      ImageBuffer: req.file?.buffer
    });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var ThreeBannerControllerGet = async (req, res, next) => {
  try {
    const result = await ThreeBannerService.ThreeBannerServiceGet();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var updateThreeBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { Selected_type, BannerTitle, Description } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await ThreeBannerService.updateThreeBanner(id, Selected_type, BannerTitle, Description, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "Three banner data updated successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deletethreeBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await ThreeBannerService.deletethreeBanner(id);
    res.status(200).json({
      status: true,
      message: "Three banner delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var ThreeBannerController = {
  ThreeBannerControllerPost,
  ThreeBannerControllerGet,
  updateThreeBanner: updateThreeBanner2,
  deletethreeBanner: deletethreeBanner2
};

// src/modules/Home_Api/Three_Banner/Three_Banner.router.ts
var router3 = Router3();
router3.get("/", ThreeBannerController.ThreeBannerControllerGet);
router3.post("/", multer_default.single("Image"), ThreeBannerController.ThreeBannerControllerPost);
router3.patch("/:id", multer_default.single("Image"), ThreeBannerController.updateThreeBanner);
router3.delete("/:id", ThreeBannerController.deletethreeBanner);
var ThreeBannerRouter = router3;

// src/modules/Home_Api/Founding_Member/Founding_Member.router.ts
import { Router as Router4 } from "express";

// src/modules/Home_Api/Founding_Member/utils/FoundingMemberCloudinery.ts
var FoundingMemberImageUploadInCloudinery = async (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary_default.uploader.upload_stream({ folder: "FoundingMemberImage" }, (error, result) => {
      if (error) reject(error);
      else if (!result) reject(new Error("Cloudinary Upload Failed"));
      else resolve(result.secure_url);
    }).end(buffer);
  });
};

// src/modules/Home_Api/Founding_Member/Founding_Member.service.ts
var FoundingMemberServiceGet = async () => {
  try {
    const result = await prisma.foundingMemberMessage.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var FoundingMemberServicePost = async (data) => {
  try {
    if (!data.ImageBuffer) {
      throw new Error("Image is required");
    }
    let ImageUrl = await FoundingMemberImageUploadInCloudinery(
      data.ImageBuffer
    );
    const result = await prisma.foundingMemberMessage.create({
      data: {
        ChooseFoundingMemberType: data.ChooseFoundingMemberType,
        Name: data.Name,
        Description: data.Description,
        Choose_Image: ImageUrl
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateFoundingMember = async (id, ChooseFoundingMemberType, Name, Description, Choose_Image) => {
  try {
    const result = await prisma.foundingMemberMessage.update({
      where: { id },
      data: {
        ChooseFoundingMemberType,
        Name,
        Description,
        Choose_Image
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteFoundingMember = async (id) => {
  try {
    const existingId = await prisma.foundingMemberMessage.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Founding member not found");
    }
    const deleteData = await prisma.foundingMemberMessage.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Founding member doesn`t delete successfully");
  }
};
var FoundingMemberService = {
  FoundingMemberServicePost,
  FoundingMemberServiceGet,
  updateFoundingMember,
  deleteFoundingMember
};

// src/modules/Home_Api/Founding_Member/Founding_Member.controller.ts
var FoundingMemberControllerPost = async (req, res, next) => {
  try {
    const result = await FoundingMemberService.FoundingMemberServicePost({
      ...req.body,
      ImageBuffer: req.file?.buffer
    });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
var FoundingMemberControllerGet = async (req, res, next) => {
  try {
    const result = await FoundingMemberService.FoundingMemberServiceGet();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var updateFoundingMember2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { ChooseFoundingMemberType, Name, Description } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await FoundingMemberService.updateFoundingMember(id, ChooseFoundingMemberType, Name, Description, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "Community Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteFoundingMember2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await FoundingMemberService.deleteFoundingMember(id);
    res.status(200).json({
      status: true,
      message: "Founding member data delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var FoundingMemberController = {
  FoundingMemberControllerPost,
  FoundingMemberControllerGet,
  updateFoundingMember: updateFoundingMember2,
  deleteFoundingMember: deleteFoundingMember2
};

// src/modules/Home_Api/Founding_Member/Founding_Member.router.ts
var router4 = Router4();
router4.get("/", FoundingMemberController.FoundingMemberControllerGet);
router4.post("/", multer_default.single("image"), FoundingMemberController.FoundingMemberControllerPost);
router4.patch("/:id", multer_default.single("image"), FoundingMemberController.updateFoundingMember);
router4.delete("/:id", FoundingMemberController.deleteFoundingMember);
var Founding_MemberRouter = router4;

// src/middleware/globalErrorHandler.ts
var globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Something want wrong";
  res.status(statusCode).json({
    success: false,
    message: errorMessage
  });
};

// src/modules/Home_Api/Popular_Desise/Popular_Desise.router.ts
import { Router as Router5 } from "express";

// src/modules/Home_Api/Popular_Desise/Popular_Desise.service.ts
var GetPopularDesisService = async () => {
  try {
    const result = await prisma.popularMedicalDecis.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var PostPopularDesisService = async (Desis_Name, Choose_Image, Description_Title, Description, dynamicDescriptions) => {
  try {
    const result = await prisma.popularMedicalDecis.create({
      data: {
        Desis_Name,
        Choose_Image,
        Description_Title,
        Description,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updatePopularDesisService = async (id, Desis_Name, Choose_Image, Description_Title, Description, dynamicDescriptions) => {
  try {
    const result = await prisma.popularMedicalDecis.update({
      where: { id },
      data: {
        Desis_Name,
        Choose_Image,
        Description_Title,
        Description,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deletePopularDesis = async (id) => {
  try {
    const existingId = await prisma.popularMedicalDecis.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Popular desis not found");
    }
    const deleteData = await prisma.popularMedicalDecis.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Popular desies doesn`t delete successfully");
  }
};
var PopularDesisService = {
  GetPopularDesisService,
  PostPopularDesisService,
  deletePopularDesis,
  updatePopularDesisService
};

// src/modules/Home_Api/Popular_Desise/Popular_Desise.controller.ts
var getPopularDesiesController = async (req, res, next) => {
  try {
    const result = await PopularDesisService.GetPopularDesisService();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var createPopularDesiesController = async (req, res, next) => {
  try {
    const { Desis_Name, Description_Title, Description, dynamicDescriptions } = req.body;
    let chooseImageUrl = "";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const parsedDynamicDescriptions = dynamicDescriptions ? JSON.parse(dynamicDescriptions) : [];
    const data = await PopularDesisService.PostPopularDesisService(
      Desis_Name,
      chooseImageUrl,
      Description_Title,
      Description,
      parsedDynamicDescriptions
    );
    res.status(200).json({
      success: true,
      data,
      message: "Popular Desies Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var updatePopularDesisService2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Desis_Name = req.body.Desis_Name || "";
    const Description_Title = req.body.Description_Title || "";
    const Description = req.body.Description || "";
    const dynamicDescriptions = req.body.dynamicDescriptions;
    let chooseImageUrl = req.body.existingImage || "";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const parsedDynamicDescriptions = dynamicDescriptions ? JSON.parse(dynamicDescriptions) : [];
    const data = await PopularDesisService.updatePopularDesisService(
      id,
      Desis_Name,
      chooseImageUrl,
      Description_Title,
      Description,
      parsedDynamicDescriptions
    );
    res.status(200).json({
      success: true,
      data,
      message: "Updated successfully"
    });
  } catch (err) {
    next(err);
  }
};
var deletePopularDesis2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await PopularDesisService.deletePopularDesis(id);
    res.status(200).json({
      status: true,
      message: "Gallery image delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var PopularDesisController = {
  getPopularDesiesController,
  createPopularDesiesController,
  updatePopularDesisService: updatePopularDesisService2,
  deletePopularDesis: deletePopularDesis2
};

// src/modules/Home_Api/Popular_Desise/Popular_Desise.router.ts
var router5 = Router5();
router5.get("/", PopularDesisController.getPopularDesiesController);
router5.post("/", multer_default.single("image"), PopularDesisController.createPopularDesiesController);
router5.patch("/:id", multer_default.single("image"), PopularDesisController.updatePopularDesisService);
router5.delete("/:id", PopularDesisController.deletePopularDesis);
var PopularDesiseRouter = router5;

// src/modules/Home_Api/Communication_HelthCare/Communication_HelthCare.router.ts
import { Router as Router6 } from "express";

// src/modules/Home_Api/Communication_HelthCare/Communication_HelthCare.service.ts
var GetCommunication_HelthCareService = async () => {
  try {
    const result = await prisma.communicationAndHealthcare.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var PostCommunication_HelthCareService = async (Title_Name, Overview, Choose_Image, DescriptionTitle, Description, dynamicDescriptions) => {
  return await prisma.communicationAndHealthcare.create({
    data: {
      Title_Name,
      Overview,
      Choose_Image,
      DescriptionTitle,
      Description,
      dynamicDescriptions
    }
  });
};
var updateCommunicationHelthCare = async (id, Title_Name, Overview, Choose_Image, DescriptionTitle, Description, dynamicDescriptions) => {
  try {
    const result = await prisma.communicationAndHealthcare.update({
      where: { id },
      data: {
        Title_Name,
        Overview,
        Choose_Image,
        DescriptionTitle,
        Description,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteCommunicationHelthCare = async (id) => {
  try {
    const existingId = await prisma.communicationAndHealthcare.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Popular medical Decis image not found");
    }
    const deleteData = await prisma.communicationAndHealthcare.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Popular medical Decis doesn`t delete successfully");
  }
};
var Communication_HelthCareService = {
  GetCommunication_HelthCareService,
  PostCommunication_HelthCareService,
  updateCommunicationHelthCare,
  deleteCommunicationHelthCare
};

// src/modules/Home_Api/Communication_HelthCare/Communication_HelthCare.controller.ts
var getCommunication_HelthCareController = async (req, res, next) => {
  try {
    const result = await Communication_HelthCareService.GetCommunication_HelthCareService();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var createCommunication_HelthCare = async (req, res, next) => {
  try {
    const { Title_Name, Overview, DescriptionTitle, Description, dynamicDescriptions } = req.body;
    let chooseImageUrl = "";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const parsedDynamicDescriptions = dynamicDescriptions ? JSON.parse(dynamicDescriptions) : [];
    const data = await Communication_HelthCareService.PostCommunication_HelthCareService(
      Title_Name,
      Overview,
      chooseImageUrl,
      DescriptionTitle,
      Description,
      parsedDynamicDescriptions
    );
    res.status(200).json({
      success: true,
      data,
      message: "Communication health care Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var updateCommunicationHelthCare2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { Title_Name, Overview, DescriptionTitle, Description, dynamicDescriptions } = req.body;
    let chooseImageUrl = "";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const parsedDynamicDescriptions = dynamicDescriptions ? JSON.parse(dynamicDescriptions) : [];
    const data = await Communication_HelthCareService.updateCommunicationHelthCare(
      id,
      Title_Name,
      Overview,
      chooseImageUrl,
      DescriptionTitle,
      Description,
      parsedDynamicDescriptions
    );
    res.status(200).json({
      success: true,
      data,
      message: "Communication health care Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteCommunicationHelthCare2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await Communication_HelthCareService.deleteCommunicationHelthCare(id);
    res.status(200).json({
      status: true,
      message: "Communication health care data delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var Communication_HelthCareController = {
  getCommunication_HelthCareController,
  createCommunication_HelthCare,
  updateCommunicationHelthCare: updateCommunicationHelthCare2,
  deleteCommunicationHelthCare: deleteCommunicationHelthCare2
};

// src/modules/Home_Api/Communication_HelthCare/Communication_HelthCare.router.ts
var router6 = Router6();
router6.get("/", Communication_HelthCareController.getCommunication_HelthCareController);
router6.post("/", multer_default.single("image"), Communication_HelthCareController.createCommunication_HelthCare);
router6.patch("/:id", multer_default.single("image"), Communication_HelthCareController.updateCommunicationHelthCare);
router6.delete("/:id", Communication_HelthCareController.deleteCommunicationHelthCare);
var Communication_HelthCare = router6;

// src/modules/Home_Api/Communiction_Hearing/Communiction_Hearing.router.ts
import { Router as Router7 } from "express";

// src/modules/Home_Api/Communiction_Hearing/Communiction_Hearing.service.ts
var GetCommuniction_Hearing = async () => {
  try {
    const result = await prisma.hearingAndHealthcare.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var PostCommuniction_Hearing = async (Title_Name, Description) => {
  try {
    const result = await prisma.hearingAndHealthcare.create({
      data: {
        Title_Name,
        Description
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteCommunictionHearing = async (id) => {
  try {
    const existingId = await prisma.hearingAndHealthcare.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Hearing and healthcare not found");
    }
    const deleteData = await prisma.hearingAndHealthcare.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Hearing and healthcare doesn`t delete successfully");
  }
};
var updateCommunictionHearing = async (id, updatedData) => {
  try {
    const result = await prisma.hearingAndHealthcare.update({
      where: { id },
      data: updatedData
    });
    return result;
  } catch (err) {
    throw new Error("Communication and Hearing data doesn`t updated successfully");
  }
};
var Communiction_HearingService = {
  GetCommuniction_Hearing,
  PostCommuniction_Hearing,
  updateCommunictionHearing,
  deleteCommunictionHearing
};

// src/modules/Home_Api/Communiction_Hearing/Communiction_Hearing.controller.ts
var getCommuniction_Hearing = async (req, res, next) => {
  try {
    const result = await Communiction_HearingService.GetCommuniction_Hearing();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postCommuniction_Hearing = async (req, res, next) => {
  try {
    const { Title_Name, Description } = req.body;
    const data = await Communiction_HearingService.PostCommuniction_Hearing(Title_Name, Description);
    res.status(200).json({
      success: true,
      data,
      message: "Communiction hearing Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteCommunictionHearing2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await Communiction_HearingService.deleteCommunictionHearing(id);
    res.status(200).json({
      status: true,
      message: "Communication and hearing data delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateCommunictionHearing2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await Communiction_HearingService.updateCommunictionHearing(id, updatedData);
    res.status(200).json({
      success: true,
      message: "Donation faq data update successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var Communiction_HearingController = {
  getCommuniction_Hearing,
  postCommuniction_Hearing,
  updateCommunictionHearing: updateCommunictionHearing2,
  deleteCommunictionHearing: deleteCommunictionHearing2
};

// src/modules/Home_Api/Communiction_Hearing/Communiction_Hearing.router.ts
var router7 = Router7();
router7.get("/", Communiction_HearingController.getCommuniction_Hearing);
router7.post("/", Communiction_HearingController.postCommuniction_Hearing);
router7.patch("/:id", Communiction_HearingController.updateCommunictionHearing);
router7.delete("/:id", Communiction_HearingController.deleteCommunictionHearing);
var Communiction_HearingRouter = router7;

// src/modules/Home_Api/Community/Community.router.ts
import { Router as Router8 } from "express";

// src/modules/Home_Api/Community/Community.service.ts
var GetCommunityService = async () => {
  try {
    const result = await prisma.ourCommunityEvent.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var PostCommunityService = async (Event_Title, Event_Place_Name, Description, Choose_Image) => {
  try {
    const result = await prisma.ourCommunityEvent.create({
      data: {
        Event_Title,
        Event_Place_Name,
        Description,
        Choose_Image
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateCommunityService = async (id, Event_Title, Event_Place_Name, Description, Choose_Image) => {
  try {
    const existing = await prisma.ourCommunityEvent.findUnique({
      where: { id }
    });
    const dataToUpdate = {
      Event_Title,
      Event_Place_Name,
      Description
    };
    if (Choose_Image) {
      dataToUpdate.Choose_Image = Choose_Image;
    }
    const result = await prisma.ourCommunityEvent.update({
      where: { id },
      data: dataToUpdate
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteCommunity = async (id) => {
  try {
    const existingId = await prisma.ourCommunityEvent.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Community data not found");
    }
    const deleteData = await prisma.ourCommunityEvent.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Community data doesn`t delete successfully");
  }
};
var CommunityService = {
  GetCommunityService,
  PostCommunityService,
  updateCommunityService,
  deleteCommunity
};

// src/modules/Home_Api/Community/Community.controller.ts
var getCommunityController = async (req, res, next) => {
  try {
    const result = await CommunityService.GetCommunityService();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var createCommunityController = async (req, res, next) => {
  try {
    const { Event_Title, Event_Place_Name, Description } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await CommunityService.PostCommunityService(Event_Title, Event_Place_Name, Description, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "Community Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var updateCommunity = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { Event_Title, Event_Place_Name, Description } = req.body;
    let chooseImageUrl = void 0;
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await CommunityService.updateCommunityService(
      id,
      Event_Title,
      Event_Place_Name,
      Description,
      chooseImageUrl
    );
    res.status(200).json({
      success: true,
      data,
      message: "Community update successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteCommunity2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await CommunityService.deleteCommunity(id);
    res.status(200).json({
      status: true,
      message: "Community data delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var CommunityController = {
  getCommunityController,
  createCommunityController,
  updateCommunity,
  deleteCommunity: deleteCommunity2
};

// src/modules/Home_Api/Community/Community.router.ts
var router8 = Router8();
router8.get("/", CommunityController.getCommunityController);
router8.post("/", multer_default.single("image"), CommunityController.createCommunityController);
router8.patch("/:id", multer_default.single("image"), CommunityController.updateCommunity);
router8.delete("/:id", CommunityController.deleteCommunity);
var CommunityRouter = router8;

// src/modules/Home_Api/Mission_vission_object/Mission_vission_object.router.ts
import express2 from "express";

// src/modules/Home_Api/Mission_vission_object/Mission_vission_object.service.ts
var getMissionVissionObject = async () => {
  try {
    const result = await prisma.missionVissionObject.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var Create_Mission_vission_object_service = async (data) => {
  try {
    const result = await prisma.missionVissionObject.create({
      data: {
        postType: data.postType,
        Title: data.Title,
        Description: data.Description,
        dynamicDescriptions: data.dynamicDescriptions ?? [],
        Image: data.Image
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateMissionVissionObject = async (id, postType, Title, Description, Image, dynamicDescriptions) => {
  try {
    const result = await prisma.missionVissionObject.update({
      where: { id },
      data: {
        postType,
        Title,
        Description,
        Image,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteMissionVissionObject = async (id) => {
  try {
    const existingId = await prisma.missionVissionObject.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Mission vission not found");
    }
    const deleteData = await prisma.missionVissionObject.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Misson vission doesn`t delete successfully");
  }
};
var Mission_vission_objectService = {
  getMissionVissionObject,
  Create_Mission_vission_object_service,
  deleteMissionVissionObject,
  updateMissionVissionObject
};

// src/modules/Home_Api/Mission_vission_object/Mission_vission_object.controller.ts
var Mission_vission_object_Post = async (req, res, next) => {
  try {
    const { postType, Title, Description, dynamicDescriptions } = req.body;
    if (!postType) {
      return res.status(400).json({ success: false, message: "PostType is required" });
    }
    let imageUrl = "";
    if (postType === "Image") {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "Image is required for upload" });
      }
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_default.uploader.upload_stream({ folder: "hero" }, (error, result2) => {
          if (error) reject(error);
          else if (!result2) reject(new Error("Cloudinary Upload Failed"));
          else resolve(result2);
        }).end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }
    let parsedDynamicDescriptions = [];
    if (dynamicDescriptions) {
      try {
        parsedDynamicDescriptions = JSON.parse(dynamicDescriptions);
      } catch (err) {
        return res.status(400).json({ success: false, message: "Invalid dynamicDescriptions format" });
      }
    }
    const result = await Mission_vission_objectService.Create_Mission_vission_object_service({
      postType,
      Title: Title || "",
      Description: Description || "",
      dynamicDescriptions: parsedDynamicDescriptions,
      Image: imageUrl
    });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var Mission_vission_object_Get = async (req, res, next) => {
  try {
    const result = await Mission_vission_objectService.getMissionVissionObject();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var updateMissionVissionObject2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const postType = req.body.postType;
    const Title = req.body.Title;
    const Description = req.body.Description;
    const dynamicDescriptions = req.body.dynamicDescriptions ? JSON.parse(req.body.dynamicDescriptions) : void 0;
    let chooseImageUrl = req.body.existingImage || "";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await Mission_vission_objectService.updateMissionVissionObject(
      id,
      postType,
      Title,
      Description,
      chooseImageUrl,
      dynamicDescriptions
    );
    res.status(200).json({
      success: true,
      data,
      message: "Mission vission object data updated successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteMissionVissionObject2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await Mission_vission_objectService.deleteMissionVissionObject(id);
    res.status(200).json({
      status: true,
      message: "Mission Vission object delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var MissionVissionObjectController = {
  Mission_vission_object_Post,
  Mission_vission_object_Get,
  updateMissionVissionObject: updateMissionVissionObject2,
  deleteMissionVissionObject: deleteMissionVissionObject2
};

// src/modules/Home_Api/Mission_vission_object/Mission_vission_object.router.ts
var router9 = express2.Router();
router9.get("/", MissionVissionObjectController.Mission_vission_object_Get);
router9.post("/", multer_default.single("image"), MissionVissionObjectController.Mission_vission_object_Post);
router9.patch("/:id", multer_default.single("image"), MissionVissionObjectController.updateMissionVissionObject);
router9.delete("/:id", MissionVissionObjectController.deleteMissionVissionObject);
var MissionVissionObjectRouter = router9;

// src/modules/About_Api/About_Three_Banner_api/About_Three_Banner.service.ts
var postThreeBanner = async (data) => {
  try {
    if (!data.ImageBuffer) {
      throw new Error("Image is Required");
    }
    let ImageUrl = await ThreeBannerImageUploadInCloudinery(
      data.ImageBuffer
    );
    const result = await prisma.aboutThreeBanner.create({
      data: {
        selected_type: data.selected_type,
        BannerTitle: data.BannerTitle,
        Description: data.Description,
        Image: ImageUrl
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var getThreeBanner = async () => {
  try {
    const result = await prisma.aboutThreeBanner.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteThreeBanner = async (id) => {
  try {
    const findNewsId = await prisma.aboutThreeBanner.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Three banner data not found");
    }
    const deleteData = await prisma.aboutThreeBanner.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Three banner data not delete successfully");
  }
};
var updateThreeBanner3 = async (id, selected_type, BannerTitle, Description, Image) => {
  try {
    const result = await prisma.aboutThreeBanner.update({
      where: { id },
      data: {
        selected_type,
        BannerTitle,
        Description,
        Image
      }
    });
    return result;
  } catch (err) {
    throw new Error("About three banner data doesn`t updated successfully");
  }
};
var ThreeBannerService2 = {
  postThreeBanner,
  getThreeBanner,
  updateThreeBanner: updateThreeBanner3,
  deleteThreeBanner
};

// src/modules/About_Api/About_Three_Banner_api/About_Three_Banner.controller.ts
var postThreeBanner2 = async (req, res, next) => {
  try {
    const result = await ThreeBannerService2.postThreeBanner({
      ...req.body,
      ImageBuffer: req.file?.buffer
    });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var getThreeBanner2 = async (req, res, next) => {
  try {
    const result = await ThreeBannerService2.getThreeBanner();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var deleteThreeBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await ThreeBannerService2.deleteThreeBanner(id);
    res.status(200).json({
      status: true,
      message: "Three Banner banner delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateThreeBanner4 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { selected_type, BannerTitle, Description } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await ThreeBannerService2.updateThreeBanner(id, selected_type, BannerTitle, Description, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "About three banner update successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var AboutThreeBannerController = {
  postThreeBanner: postThreeBanner2,
  getThreeBanner: getThreeBanner2,
  updateThreeBanner: updateThreeBanner4,
  deleteThreeBanner: deleteThreeBanner2
};

// src/modules/About_Api/About_Three_Banner_api/About_Three_Banner.router.ts
import { Router as Router10 } from "express";
var router10 = Router10();
router10.get("/", AboutThreeBannerController.getThreeBanner);
router10.post("/", multer_default.single("Image"), AboutThreeBannerController.postThreeBanner);
router10.patch("/:id", multer_default.single("Image"), AboutThreeBannerController.updateThreeBanner);
router10.delete("/:id", AboutThreeBannerController.deleteThreeBanner);
var AboutThreeBannerRouter = router10;

// src/modules/About_Api/About_Banner/About_Banner.router.ts
import express3 from "express";

// src/modules/About_Api/About_Banner/About_Banner.service.ts
var getAboutBanner = async () => {
  try {
    const result = await prisma.aboutHero.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postAboutBanner = async (data) => {
  try {
    const result = await prisma.aboutHero.create({ data });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateAboutBanner = async (id, selected_type, title, shortOverview, descripiton, image) => {
  try {
    const data = {
      selected_type,
      title
    };
    if (shortOverview !== void 0) data.shortOverview = shortOverview;
    if (descripiton !== void 0) data.descripiton = descripiton;
    if (image !== void 0) data.image = image;
    const result = await prisma.aboutHero.update({
      where: { id },
      data
    });
    return result;
  } catch (err) {
    throw new Error("About banner data doesn`t updated successfully");
  }
};
var deleteAboutBanner = async (id) => {
  try {
    const findNewsId = await prisma.aboutHero.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("About banner not found");
    }
    const deleteData = await prisma.aboutHero.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("About banner not delete successfully");
  }
};
var aboutBannerSerivce = {
  getAboutBanner,
  postAboutBanner,
  updateAboutBanner,
  deleteAboutBanner
};

// src/modules/About_Api/About_Banner/About_Banner.controller.ts
var postAboutBanner2 = async (req, res, next) => {
  try {
    const { selected_type, title, shortOverview, descripiton, image } = req.body;
    let imageUrl = "";
    if (selected_type === "Image") {
      if (!req.file) {
        return res.status(400).json({ err: "Image is required of upload image" });
      }
      ;
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_default.uploader.upload_stream({ folder: "hero" }, (error, result2) => {
          if (error) reject(error);
          else if (!result2) reject(new Error("Cloudinary Upload Failed"));
          else resolve(result2);
        }).end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }
    const result = await aboutBannerSerivce.postAboutBanner({
      selected_type,
      title: title ?? null,
      shortOverview: shortOverview ?? null,
      descripiton: descripiton ?? null,
      image: imageUrl
    });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var getAboutBanner2 = async (req, res, next) => {
  try {
    const result = await aboutBannerSerivce.getAboutBanner();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var updateAboutBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { selected_type, title, shortOverview, descripiton } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await aboutBannerSerivce.updateAboutBanner(id, selected_type, title, shortOverview, descripiton, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "About banner data update Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteAboutBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await aboutBannerSerivce.deleteAboutBanner(id);
    res.status(200).json({
      status: true,
      message: "About banner delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var aboutBannerController = {
  postAboutBanner: postAboutBanner2,
  getAboutBanner: getAboutBanner2,
  updateAboutBanner: updateAboutBanner2,
  deleteAboutBanner: deleteAboutBanner2
};

// src/modules/About_Api/About_Banner/About_Banner.router.ts
var router11 = express3.Router();
router11.get("/", aboutBannerController.getAboutBanner);
router11.post("/", multer_default.single("image"), aboutBannerController.postAboutBanner);
router11.patch("/:id", multer_default.single("image"), aboutBannerController.updateAboutBanner);
router11.delete("/:id", aboutBannerController.deleteAboutBanner);
var aboutHeroRouter = router11;

// src/modules/About_Api/About_Last_banner/About_Last_banner.router.ts
import express4 from "express";

// src/modules/About_Api/About_Last_banner/About_Last_banner.service.ts
var postAboutLastBanner = async (data) => {
  const result = await prisma.lastBanner.create({ data });
  return result;
};
var getAboutLastBanner = async () => {
  const result = await prisma.lastBanner.findMany();
  return result;
};
var deleteAboutLastBanner = async (id) => {
  try {
    const findNewsId = await prisma.lastBanner.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Last banner not found");
    }
    const deleteData = await prisma.lastBanner.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Last banner not delete successfully");
  }
};
var updateAboutLastBanner = async (id, selected_type, title, descripiton, image) => {
  try {
    const result = await prisma.lastBanner.update({
      where: { id },
      data: {
        selected_type,
        title,
        descripiton,
        image
      }
    });
    return result;
  } catch (err) {
    throw new Error("About last banner data doesn`t updated successfully", err);
  }
};
var aboutLastBannerSerivce = {
  postAboutLastBanner,
  getAboutLastBanner,
  updateAboutLastBanner,
  deleteAboutLastBanner
};

// src/modules/About_Api/About_Last_banner/About_Last_banner.controller.ts
var postAboutLastBanner2 = async (req, res, next) => {
  try {
    const { selected_type, title, descripiton, image } = req.body;
    let imageUrl = "";
    if (selected_type === "Image") {
      if (!req.file) {
        return res.status(400).json({ err: "Image is required of upload image" });
      }
      ;
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary_default.uploader.upload_stream({ folder: "hero" }, (error, result2) => {
          if (error) reject(error);
          else if (!result2) reject(new Error("Cloudinary Upload Failed"));
          else resolve(result2);
        }).end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }
    const result = await aboutLastBannerSerivce.postAboutLastBanner({
      selected_type,
      title: title ?? null,
      descripiton: descripiton ?? null,
      image: imageUrl
    });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};
var getAboutLastBanner2 = async (req, res, next) => {
  try {
    const result = await aboutLastBannerSerivce.getAboutLastBanner();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
var deleteAboutLastBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await aboutLastBannerSerivce.deleteAboutLastBanner(id);
    res.status(200).json({
      status: true,
      message: "About last banner delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateAboutLastBanner2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { selected_type, title, descripiton } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await aboutLastBannerSerivce.updateAboutLastBanner(id, selected_type, title, descripiton, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "About last banner data update Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var aboutLastBannerController = {
  postAboutLastBanner: postAboutLastBanner2,
  getAboutLastBanner: getAboutLastBanner2,
  updateAboutLastBanner: updateAboutLastBanner2,
  deleteAboutLastBanner: deleteAboutLastBanner2
};

// src/modules/About_Api/About_Last_banner/About_Last_banner.router.ts
var router12 = express4.Router();
router12.get("/", aboutLastBannerController.getAboutLastBanner);
router12.post("/", multer_default.single("image"), aboutLastBannerController.postAboutLastBanner);
router12.patch("/:id", multer_default.single("image"), aboutLastBannerController.updateAboutLastBanner);
router12.delete("/:id", aboutLastBannerController.deleteAboutLastBanner);
var aboutLastBannerRouter = router12;

// src/modules/News_Api/News.router.ts
import { Router as Router13 } from "express";

// src/modules/News_Api/News.service.ts
var getNews = async () => {
  try {
    const result = await prisma.newsAndUpdate.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postNews = async (newsTitle, image, description) => {
  try {
    const result = await prisma.newsAndUpdate.create({
      data: {
        newsTitle,
        image,
        description
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateNews = async (id, updateData) => {
  try {
    const result = await prisma.newsAndUpdate.update({
      where: { id },
      data: updateData
    });
    return result;
  } catch (err) {
    throw new Error("News update failed");
  }
};
var deleteNews = async (id) => {
  try {
    const findNewsId = await prisma.newsAndUpdate.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("News not found");
    }
    const deletenewsData = await prisma.newsAndUpdate.delete({
      where: { id }
    });
    return deletenewsData;
  } catch (err) {
    throw new Error("News Data not delete successfully");
  }
};
var NewsService = {
  getNews,
  postNews,
  updateNews,
  deleteNews
};

// src/modules/News_Api/News.controller.ts
var getNews2 = async (req, res, next) => {
  try {
    const result = await NewsService.getNews();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postNews2 = async (req, res, next) => {
  try {
    const { newsTitle, description } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await NewsService.postNews(newsTitle, chooseImageUrl, description);
    res.status(200).json({
      success: true,
      data,
      message: "News Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var updateNews2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { newsTitle, description } = req.body;
    let updateData = {
      newsTitle,
      description
    };
    if (req.file && req.file.buffer) {
      const imageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
      updateData.image = imageUrl;
    }
    const data = await NewsService.updateNews(id, updateData);
    res.status(200).json({
      success: true,
      data,
      message: "News update Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteNews2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await NewsService.deleteNews(id);
    res.status(200).json({
      status: true,
      message: "News delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var NewsController = {
  getNews: getNews2,
  postNews: postNews2,
  updateNews: updateNews2,
  deleteNews: deleteNews2
};

// src/modules/News_Api/News.router.ts
var router13 = Router13();
router13.get("/", NewsController.getNews);
router13.post("/", multer_default.single("image"), NewsController.postNews);
router13.patch("/:id", multer_default.single("image"), NewsController.updateNews);
router13.delete("/:id", NewsController.deleteNews);
var NewsRouter = router13;

// src/modules/Gallary_Api/Gallary.router.ts
import { Router as Router14 } from "express";

// src/modules/Gallary_Api/Gallary.service.ts
var getGallery = async () => {
  try {
    const result = await prisma.gallary.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postGallery = async (width, image, dynamicDescriptions) => {
  try {
    const result = await prisma.gallary.create({
      data: {
        width,
        image,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateGallery = async (id, width, image, dynamicDescriptions) => {
  try {
    const result = await prisma.gallary.update({
      where: { id },
      data: {
        width,
        image,
        dynamicDescriptions
      }
    });
    return result;
  } catch (err) {
    throw new Error("Gallery image doesn`t updated successfully");
  }
};
var deleteGallery = async (id) => {
  try {
    const existingId = await prisma.gallary.findUnique({
      where: { id }
    });
    if (!existingId) {
      throw new Error("Gallary image not found");
    }
    const deleteData = await prisma.gallary.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Gallery image doesn`t delete successfully");
  }
};
var GalleryService = {
  getGallery,
  postGallery,
  updateGallery,
  deleteGallery
};

// src/modules/Gallary_Api/Gallary.controller.ts
var getGallery2 = async (req, res, next) => {
  try {
    const result = await GalleryService.getGallery();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postGallery2 = async (req, res, next) => {
  try {
    const { width } = req.body;
    let dynamicDescriptions = [];
    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }
    const files = req.files;
    let mainImageUrl = "";
    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
    }
    let dynamicImageUrls = [];
    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        const url = await SingleImageUploadInCloudinery(file.buffer);
        dynamicImageUrls.push(url);
      }
    }
    const finalDescriptions = dynamicDescriptions.map(
      (item, index) => ({
        width: Number(item.width),
        image: dynamicImageUrls[index] || ""
      })
    );
    const data = await GalleryService.postGallery(
      Number(width),
      mainImageUrl,
      finalDescriptions
    );
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};
var updateGallery2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { width } = req.body;
    let dynamicDescriptions = [];
    if (req.body.dynamicDescriptions) {
      dynamicDescriptions = JSON.parse(req.body.dynamicDescriptions);
    }
    const files = req.files;
    let mainImageUrl = "";
    if (files?.image && files.image.length > 0) {
      const file = files.image[0];
      mainImageUrl = await SingleImageUploadInCloudinery(file.buffer);
    }
    let dynamicImageUrls = [];
    if (files?.dynamicImages && files.dynamicImages.length > 0) {
      for (const file of files.dynamicImages) {
        const url = await SingleImageUploadInCloudinery(file.buffer);
        dynamicImageUrls.push(url);
      }
    }
    const finalDescriptions = dynamicDescriptions.map(
      (item, index) => ({
        width: Number(item.width),
        image: dynamicImageUrls[index] || ""
      })
    );
    const data = await GalleryService.updateGallery(
      id,
      Number(width),
      mainImageUrl,
      finalDescriptions
    );
    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
};
var deleteGallery2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await GalleryService.deleteGallery(id);
    res.status(200).json({
      status: true,
      message: "Gallery image delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var GalleryController = {
  getGallery: getGallery2,
  postGallery: postGallery2,
  updateGallery: updateGallery2,
  deleteGallery: deleteGallery2
};

// src/modules/Gallary_Api/Gallary.router.ts
var router14 = Router14();
router14.get("/", GalleryController.getGallery);
router14.post(
  "/",
  multer_default.fields([
    { name: "image", maxCount: 1 },
    { name: "dynamicImages", maxCount: 10 }
  ]),
  GalleryController.postGallery
);
router14.patch(
  "/:id",
  multer_default.fields([
    { name: "image", maxCount: 1 },
    { name: "dynamicImages", maxCount: 10 }
  ]),
  GalleryController.updateGallery
);
router14.delete("/:id", GalleryController.deleteGallery);
var GallaryRouter = router14;

// src/modules/Contact_Api/Contract.router.ts
import { Router as Router15 } from "express";

// src/modules/Contact_Api/Contract.service.ts
var getContact = async () => {
  try {
    const result = await prisma.contactMedium.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postContact = async (postedType, FieldOne, FieldTwo) => {
  try {
    const result = await prisma.contactMedium.create({
      data: {
        postedType,
        FieldOne: FieldOne ?? null,
        FieldTwo: FieldTwo ?? null
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteContact = async (id) => {
  try {
    const findNewsId = await prisma.contactMedium.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Contact not found");
    }
    const deletenewsData = await prisma.contactMedium.delete({
      where: { id }
    });
    return deletenewsData;
  } catch (err) {
    throw new Error("Contact data not delete successfully");
  }
};
var updateContact = async (id, postedType, FieldOne, FieldTwo) => {
  try {
    const result = await prisma.contactMedium.update({
      where: { id },
      data: {
        postedType,
        FieldOne,
        FieldTwo
      }
    });
    return result;
  } catch (err) {
    throw new Error("Contact data doesn`t updated successfully", err);
  }
};
var ContactService = {
  getContact,
  postContact,
  updateContact,
  deleteContact
};

// src/modules/Contact_Api/Contract.controller.ts
var getContact2 = async (req, res, next) => {
  try {
    const result = await ContactService.getContact();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postContact2 = async (req, res, next) => {
  try {
    const { postedType, FieldOne, FieldTwo } = req.body;
    const data = await ContactService.postContact(postedType, FieldOne, FieldTwo);
    res.status(200).json({
      success: true,
      data,
      message: "contact post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteContact2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await ContactService.deleteContact(id);
    res.status(200).json({
      status: true,
      message: "Contact data delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateContact2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { postedType, FieldOne, FieldTwo } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await ContactService.updateContact(id, postedType, FieldOne, FieldTwo);
    res.status(200).json({
      success: true,
      data,
      message: "Contact data update successfully"
    });
  } catch (err) {
    next(err);
  }
};
var ContactController = {
  getContact: getContact2,
  postContact: postContact2,
  updateContact: updateContact2,
  deleteContact: deleteContact2
};

// src/modules/Contact_Api/Contract.router.ts
var router15 = Router15();
router15.get("/", ContactController.getContact);
router15.post("/", ContactController.postContact);
router15.patch("/:id", ContactController.updateContact);
router15.delete("/:id", ContactController.deleteContact);
var ContactRouter = router15;

// src/modules/Donation_Api/Donation_Faq_api/Donation_Faq.router.ts
import { Router as Router16 } from "express";

// src/modules/Donation_Api/Donation_Faq_api/Donation_Faq.service.ts
var getDonationFaq = async () => {
  try {
    const result = await prisma.donationFAQ.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postDonationFaq = async (Title_Name, Description) => {
  try {
    const result = await prisma.donationFAQ.create({
      data: {
        Title_Name,
        Description
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteDonationFaq = async (id) => {
  try {
    const findNewsId = await prisma.donationFAQ.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Donation FAQ data not found");
    }
    const deleteData = await prisma.donationFAQ.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Donation FAQ data not delete successfully");
  }
};
var updateDonationFaq = async (id, updatedData) => {
  try {
    const result = await prisma.donationFAQ.update({
      where: { id },
      data: updatedData
    });
    return result;
  } catch (err) {
    throw new Error("Donation FAQ data doesn`t updated successfully", err);
  }
};
var DonationFaqService = {
  getDonationFaq,
  postDonationFaq,
  updateDonationFaq,
  deleteDonationFaq
};

// src/modules/Donation_Api/Donation_Faq_api/Donation_Faq.controller.ts
var getDonationFaq2 = async (req, res, next) => {
  try {
    const result = await DonationFaqService.getDonationFaq();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postDonationFaq2 = async (req, res, next) => {
  try {
    const { Title_Name, Description } = req.body;
    const data = await DonationFaqService.postDonationFaq(Title_Name, Description);
    res.status(200).json({
      success: true,
      data,
      message: "Donation Faq Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteDonationFaq2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await DonationFaqService.deleteDonationFaq(id);
    res.status(200).json({
      status: true,
      message: "Donation FAQ delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateDonationFaq2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await DonationFaqService.updateDonationFaq(id, updatedData);
    res.status(200).json({
      success: true,
      message: "Donation faq data update successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var DonationFaqController = {
  getDonationFaq: getDonationFaq2,
  postDonationFaq: postDonationFaq2,
  deleteDonationFaq: deleteDonationFaq2,
  updateDonationFaq: updateDonationFaq2
};

// src/modules/Donation_Api/Donation_Faq_api/Donation_Faq.router.ts
var router16 = Router16();
router16.get("/", DonationFaqController.getDonationFaq);
router16.post("/", DonationFaqController.postDonationFaq);
router16.patch("/:id", DonationFaqController.updateDonationFaq);
router16.delete("/:id", DonationFaqController.deleteDonationFaq);
var DonationFaqRouter = router16;

// src/modules/Donation_Api/Donation_Text_and_Amount_api/Donation_Text_and_Amount.router.ts
import { Router as Router17 } from "express";

// src/modules/Donation_Api/Donation_Text_and_Amount_api/Donation_Text_and_Amount.service.ts
var getDonationTextandAmount = async () => {
  try {
    const result = await prisma.donationTextAndAmount.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postDonationTextandAmount = async (selectedType, Title, Description, NumberOfAmount) => {
  try {
    const result = await prisma.donationTextAndAmount.create({
      data: {
        selectedType,
        Title: Title ?? null,
        Description: Description ?? null,
        NumberOfAmount: NumberOfAmount ?? null
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateDonationTextandAmount = async (id, updatedData) => {
  try {
    const result = await prisma.donationTextAndAmount.update({
      where: { id: String(id) },
      data: updatedData
    });
    return result;
  } catch (err) {
    throw new Error("Donation update failed");
  }
};
var deleteDonationTextandAmount = async (id) => {
  try {
    const findNewsId = await prisma.donationTextAndAmount.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Donation text and amount data not found");
    }
    const deleteData = await prisma.donationTextAndAmount.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Donation text and amount data not delete successfully");
  }
};
var Donation_Text_and_AmountService = {
  getDonationTextandAmount,
  postDonationTextandAmount,
  updateDonationTextandAmount,
  deleteDonationTextandAmount
};

// src/modules/Donation_Api/Donation_Text_and_Amount_api/Donation_Text_and_Amount.controller.ts
var getDonationTextandAmount2 = async (req, res, next) => {
  try {
    const result = await Donation_Text_and_AmountService.getDonationTextandAmount();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postDonationTextandAmount2 = async (req, res, next) => {
  try {
    const { selectedType, Title, Description, NumberOfAmount } = req.body;
    const NumberOfAmountInt = Number(NumberOfAmount);
    if (!selectedType || !["Text", "Amount"].includes(selectedType)) {
      return res.status(400).json({ success: false, message: "selectedType must be 'Text' or 'Amount'" });
    }
    const data = await Donation_Text_and_AmountService.postDonationTextandAmount(selectedType, Title, Description, NumberOfAmountInt);
    res.status(200).json({
      success: true,
      data,
      message: "donation text and amount post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteDonationTextandAmount2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await Donation_Text_and_AmountService.deleteDonationTextandAmount(id);
    res.status(200).json({
      status: true,
      message: "Donation medium delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateDonationTextandAmount2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await Donation_Text_and_AmountService.updateDonationTextandAmount(id, updatedData);
    res.status(200).json({
      success: true,
      message: "Donation updated successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var Donation_Text_and_AmountController = {
  getDonationTextandAmount: getDonationTextandAmount2,
  postDonationTextandAmount: postDonationTextandAmount2,
  deleteDonationTextandAmount: deleteDonationTextandAmount2,
  updateDonationTextandAmount: updateDonationTextandAmount2
};

// src/modules/Donation_Api/Donation_Text_and_Amount_api/Donation_Text_and_Amount.router.ts
var router17 = Router17();
router17.get("/", Donation_Text_and_AmountController.getDonationTextandAmount);
router17.post("/", Donation_Text_and_AmountController.postDonationTextandAmount);
router17.delete("/:id", Donation_Text_and_AmountController.deleteDonationTextandAmount);
router17.patch("/:id", Donation_Text_and_AmountController.updateDonationTextandAmount);
var Donation_Text_and_AmountRouter = router17;

// src/modules/Donation_Api/Donation_Medium_api/Donation_Medium.router.ts
import { Router as Router18 } from "express";

// src/modules/Donation_Api/Donation_Medium_api/Donation_Medium.service.ts
var getDonationMedium = async () => {
  try {
    const result = await prisma.donationMedium.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postDonationMedium = async (MFS_Bank_Name, MFS_Bank_Image, shortOverview, FieldOne, FieldTwo) => {
  try {
    const result = await prisma.donationMedium.create({
      data: {
        MFS_Bank_Name,
        MFS_Bank_Image,
        shortOverview,
        FieldOne: FieldOne || null,
        FieldTwo: FieldTwo || null
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var updateDonationMedium = async (id, MFS_Bank_Name, shortOverview, FieldOne, FieldTwo, MFS_Bank_Image) => {
  try {
    const result = await prisma.donationMedium.update({
      where: { id },
      data: {
        MFS_Bank_Name,
        shortOverview,
        FieldOne,
        FieldTwo,
        MFS_Bank_Image
      }
    });
    return result;
  } catch (err) {
    throw new Error("Donation Medium data doesn`t updated successfully");
  }
};
var deleteDonationMedium = async (id) => {
  try {
    const findNewsId = await prisma.donationMedium.findUnique({
      where: { id }
    });
    if (!findNewsId) {
      throw new Error("Donation meidum data not found");
    }
    const deleteData = await prisma.donationMedium.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw new Error("Donation medium data not delete successfully");
  }
};
var Donation_MediumService = {
  getDonationMedium,
  postDonationMedium,
  updateDonationMedium,
  deleteDonationMedium
};

// src/modules/Donation_Api/Donation_Medium_api/Donation_Medium.controller.ts
var getDonationMedium2 = async (req, res, next) => {
  try {
    const result = await Donation_MediumService.getDonationMedium();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postDonationMedium2 = async (req, res, next) => {
  try {
    const { MFS_Bank_Name, shortOverview, FieldOne, FieldTwo } = req.body;
    if (!MFS_Bank_Name || !shortOverview) {
      throw new Error("Required fields missing");
    }
    if (!req.file) {
      throw new Error("Image is required");
    }
    const chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    const data = await Donation_MediumService.postDonationMedium(MFS_Bank_Name, chooseImageUrl, shortOverview, FieldOne, FieldTwo);
    res.status(200).json({
      success: true,
      data,
      message: "donation Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteDonationMedium2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await Donation_MediumService.deleteDonationMedium(id);
    res.status(200).json({
      status: true,
      message: "Donation medium delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var updateDonationMedium2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { MFS_Bank_Name, shortOverview, FieldOne, FieldTwo } = req.body;
    let chooseImageUrl = " ";
    if (req.file && req.file.buffer) {
      chooseImageUrl = await SingleImageUploadInCloudinery(req.file.buffer);
    }
    const data = await Donation_MediumService.updateDonationMedium(id, MFS_Bank_Name, shortOverview, FieldOne, FieldTwo, chooseImageUrl);
    res.status(200).json({
      success: true,
      data,
      message: "Donation medium updated successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var Donation_MediumController = {
  getDonationMedium: getDonationMedium2,
  postDonationMedium: postDonationMedium2,
  updateDonationMedium: updateDonationMedium2,
  deleteDonationMedium: deleteDonationMedium2
};

// src/modules/Donation_Api/Donation_Medium_api/Donation_Medium.router.ts
var router18 = Router18();
router18.get("/", Donation_MediumController.getDonationMedium);
router18.post("/", multer_default.single("MFS_Bank_Image"), Donation_MediumController.postDonationMedium);
router18.patch("/:id", multer_default.single("MFS_Bank_Image"), Donation_MediumController.updateDonationMedium);
router18.delete("/:id", Donation_MediumController.deleteDonationMedium);
var Donation_MediumRouter = router18;

// src/modules/Auth_Api/auth.router.ts
import { Router as Router19 } from "express";

// src/modules/Auth_Api/auth.service.ts
import bcrypt from "bcryptjs";
import crypto from "crypto";

// src/middleware/auth.ts
import nodemailer from "nodemailer";
var sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD
    }
  });
  const verifyLink = `${process.env.APP_URL}/auth/verify-email/${token}`;
  await transporter.sendMail({
    from: "ssltbdweb@gmail.com",
    to: email,
    subject: "Verify Your Email",
    html: `
            <!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Email Verification</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.05);">

<tr>
<td style="background:#0d6efd;padding:20px;text-align:center;color:white;font-size:22px;font-weight:bold;">
Verify Your Email
</td>
</tr>

<tr>
<td style="padding:30px;text-align:center;color:#333;font-size:16px;line-height:1.6;">
<h2 style="margin-top:0;">Welcome!</h2>
<p>Thanks for signing up. Please confirm your email address by clicking the button below.</p>

<a href="${verifyLink}" 
style="display:inline-block;margin-top:20px;padding:14px 28px;background:#28a745;color:white;text-decoration:none;border-radius:5px;font-weight:bold;">
Verify Email </a>

<p style="margin-top:30px;font-size:14px;color:#777;">
If you did not create an account, you can safely ignore this email.
</p>

<p style="margin-top:10px;font-size:14px;color:#777;">
Or copy this link and paste it into your browser:
</p>

<p style="word-break:break-all;color:#0d6efd;">
${verifyLink}
</p>

</td>
</tr>

<tr>
<td style="background:#f1f3f5;padding:15px;text-align:center;font-size:12px;color:#888;">
\xA9 2026 Your Company. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>

        `
  });
};

// src/modules/Auth_Api/auth.service.ts
import jwt from "jsonwebtoken";
var register = async (name, email, password) => {
  try {
    const existingEmail = await prisma.user.findUnique({
      where: { email }
    });
    if (existingEmail) {
      throw new Error("Email already exist");
    }
    const hassedPassword = await bcrypt.hash(password, 6);
    const token = crypto.randomBytes(32).toString("hex");
    const registerUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hassedPassword,
        emailVerifyToken: token
      }
    });
    await sendVerificationEmail(email, token);
    return registerUser;
  } catch (err) {
    throw err;
  }
};
var verifyEmail = async (token) => {
  try {
    const user = await prisma.user.findFirst({
      where: { emailVerifyToken: token }
    });
    if (!user) {
      throw new Error("Invalid verification token");
    }
    const data = await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        emailVerifyToken: null
      }
    });
    return data;
  } catch (err) {
    throw err;
  }
};
var login = async (email, password) => {
  try {
    const findEmail = await prisma.user.findUnique({
      where: { email }
    });
    if (!findEmail) {
      throw new Error("This email does not exist");
    }
    if (!findEmail.isVerified) {
      throw new Error("Please verify your email first");
    }
    const compirePassword = await bcrypt.compare(
      password,
      findEmail.password
    );
    if (!compirePassword) {
      throw new Error("Invalid Credintials");
    }
    const token = jwt.sign(
      {
        id: findEmail.id,
        name: findEmail.name,
        email: findEmail.email,
        role: findEmail.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );
    return {
      token,
      user: {
        id: findEmail.id,
        name: findEmail.name,
        email: findEmail.email,
        role: findEmail.role,
        isVerified: findEmail.isVerified
      }
    };
  } catch (err) {
    throw err;
  }
};
var getAlluser = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var updateUserRole = async (id, name, role) => {
  try {
    const result = await prisma.user.update({
      where: { id },
      data: {
        name,
        role
      }
    });
    return result;
  } catch (err) {
    throw new Error("User role doesn`t updated");
  }
};
var deleteUser = async (id) => {
  try {
    const findEmail = await prisma.user.findUnique({
      where: { id }
    });
    if (!findEmail) {
      throw new Error("Email not found");
    }
    const deleteUser3 = await prisma.user.delete({
      where: { id }
    });
    return deleteUser3;
  } catch (err) {
    throw new Error("User doesn't delete successfully");
  }
};
var authService = {
  register,
  verifyEmail,
  login,
  getAlluser,
  updateUserRole,
  deleteUser
};

// src/modules/Auth_Api/auth.controller.ts
var getAllUser = async (req, res, next) => {
  try {
    const data = await authService.getAlluser();
    res.status(200).json({
      success: true,
      message: "You are register successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var register2 = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const data = await authService.register(name, email, password);
    res.status(200).json({
      success: true,
      message: "You are register successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var login2 = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);
    res.status(200).json({
      success: true,
      message: "You are register successfully",
      data
    });
  } catch (err) {
    next(err);
  }
};
var updateUserRole2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, role } = req.body;
    const data = await authService.updateUserRole(id, name, role);
    res.status(200).json({
      success: true,
      data,
      message: "Role update Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteUser2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await authService.deleteUser(id);
    res.status(200).json({
      status: true,
      message: "User delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var verifyEmail2 = async (req, res, next) => {
  try {
    const { token } = req.params;
    await authService.verifyEmail(token);
    res.json({
      success: true,
      message: "Email verified successfully"
    });
  } catch (err) {
    next(err);
  }
};
var authController = {
  getAllUser,
  register: register2,
  login: login2,
  updateUserRole: updateUserRole2,
  deleteUser: deleteUser2,
  verifyEmail: verifyEmail2
};

// src/modules/Auth_Api/auth.router.ts
var router19 = Router19();
router19.get("/", authController.getAllUser);
router19.post("/register", authController.register);
router19.get("/verify-email/:token", authController.verifyEmail);
router19.post("/login", authController.login);
router19.patch("/role/:id", authController.updateUserRole);
router19.delete("/delete/:id", authController.deleteUser);
var authRouter = router19;

// src/modules/Footer_Api/Social.router.ts
import { Router as Router20 } from "express";

// src/modules/Footer_Api/Social.service.ts
var getSocial = async () => {
  try {
    const result = await prisma.footer.findMany();
    return result;
  } catch (err) {
    throw err;
  }
};
var postSocial = async (data) => {
  try {
    const result = await prisma.footer.create({
      data: {
        selectedType: data.selectedType,
        socialLink: data.socialLink
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var patchSocial = async (data) => {
  try {
    const result = await prisma.footer.update({
      where: { id: data.id },
      data: {
        selectedType: data.selectedType,
        socialLink: data.socialLink
      }
    });
    return result;
  } catch (err) {
    throw err;
  }
};
var deleteSocial = async (id) => {
  try {
    const findId = await prisma.footer.findUnique({
      where: { id }
    });
    if (!findId) {
      throw new Error("Footer not found");
    }
    const deleteData = await prisma.footer.delete({
      where: { id }
    });
    return deleteData;
  } catch (err) {
    throw err;
  }
};
var socialService = {
  getSocial,
  postSocial,
  patchSocial,
  deleteSocial
};

// src/modules/Footer_Api/Social.controller.ts
var getSocial2 = async (req, res, next) => {
  try {
    const result = await socialService.getSocial();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
var postSocial2 = async (req, res, next) => {
  try {
    const { socialLink, selectedType } = req.body;
    const data = await socialService.postSocial({
      socialLink,
      selectedType
    });
    res.status(200).json({
      success: true,
      data,
      message: "Footer Post Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var patchSocial2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { socialLink, selectedType } = req.body;
    const data = await socialService.patchSocial({ id, socialLink, selectedType });
    res.status(200).json({
      success: true,
      data,
      message: "Footer update Successfully!"
    });
  } catch (err) {
    next(err);
  }
};
var deleteSocial2 = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteData = await socialService.deleteSocial(id);
    res.status(200).json({
      status: true,
      message: "News delete successfully",
      data: deleteData
    });
  } catch (err) {
    next(err);
  }
};
var socialController = {
  getSocial: getSocial2,
  postSocial: postSocial2,
  patchSocial: patchSocial2,
  deleteSocial: deleteSocial2
};

// src/modules/Footer_Api/Social.router.ts
var router20 = Router20();
router20.get("/", socialController.getSocial);
router20.post("/", socialController.postSocial);
router20.patch("/:id", socialController.patchSocial);
router20.delete("/:id", socialController.deleteSocial);
var socialRouter = router20;

// src/app.ts
var app = express5();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express5.json());
app.use(express5.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/home/hero", heroRouter);
app.use("/home/hero/second", heroSecondRouter);
app.use("/home/mission/vision/object", MissionVissionObjectRouter);
app.use("/home/three/banner", ThreeBannerRouter);
app.use("/home/popular/desies", PopularDesiseRouter);
app.use("/home/communication/healthcare", Communication_HelthCare);
app.use("/home/communication/hearing", Communiction_HearingRouter);
app.use("/home/founding/member/message", Founding_MemberRouter);
app.use("/home/community", CommunityRouter);
app.use("/about/hero", aboutHeroRouter);
app.use("/about/three/banner", AboutThreeBannerRouter);
app.use("/about/last/banner", aboutLastBannerRouter);
app.use("/news", NewsRouter);
app.use("/gallery", GallaryRouter);
app.use("/contact", ContactRouter);
app.use("/donation/faq", DonationFaqRouter);
app.use("/donation/amount", Donation_Text_and_AmountRouter);
app.use("/donation/medium", Donation_MediumRouter);
app.use("/footer", socialRouter);
app.get("/", (req, res) => {
  res.send("Hello Bangladesh People!");
});
app.use(globalErrorHandler);
var app_default = app;
export {
  app_default as default
};
