import express, { Application, Request, Response } from "express";
import { heroRouter } from "./modules/Home_Api/Hero/Hero.router";
import cors from 'cors'
import { heroSecondRouter } from "./modules/Home_Api/Hero_sec/HeroSecond.router";
import { ThreeBannerRouter } from "./modules/Home_Api/Three_Banner/Three_Banner.router";
import { Founding_MemberRouter } from "./modules/Home_Api/Founding_Member/Founding_Member.router";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { PopularDesiseRouter } from "./modules/Home_Api/Popular_Desise/Popular_Desise.router";
import { Communication_HelthCare } from "./modules/Home_Api/Communication_HelthCare/Communication_HelthCare.router";
import { Communiction_HearingRouter } from "./modules/Home_Api/Communiction_Hearing/Communiction_Hearing.router";
import { CommunityRouter } from "./modules/Home_Api/Community/Community.router";
import { MissionVissionObjectRouter } from "./modules/Home_Api/Mission_vission_object/Mission_vission_object.router";
import { AboutThreeBannerRouter } from "./modules/About_Api/About_Three_Banner_api/About_Three_Banner.router";
import { aboutHeroRouter } from "./modules/About_Api/About_Banner/About_Banner.router";
import { aboutLastBannerRouter } from "./modules/About_Api/About_Last_banner/About_Last_banner.router";
import { NewsRouter } from "./modules/News_Api/News.router";
import { GallaryRouter } from "./modules/Gallary_Api/Gallary.router";
import { ContactRouter } from "./modules/Contact_Api/Contract.router";
import { DonationFaqRouter } from "./modules/Donation_Api/Donation_Faq_api/Donation_Faq.router";
import { Donation_Text_and_AmountRouter } from "./modules/Donation_Api/Donation_Text_and_Amount_api/Donation_Text_and_Amount.router";
import { Donation_MediumRouter } from "./modules/Donation_Api/Donation_Medium_api/Donation_Medium.router";
import { authRouter } from "./modules/Auth_Api/auth.router";
import { socialRouter } from "./modules/Footer_Api/Social.router";

const app: Application = express()

// app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   credentials: true,
// }));

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_LOCAL
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed"), false);
    }
  },
  credentials: true,
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// auth url 

app.use('/auth', authRouter)

// home url 
app.use('/home/hero', heroRouter)
app.use('/home/hero/second', heroSecondRouter)
app.use('/home/mission/vision/object', MissionVissionObjectRouter)
app.use('/home/three/banner', ThreeBannerRouter)
app.use('/home/popular/desies', PopularDesiseRouter)
app.use('/home/communication/healthcare', Communication_HelthCare)
app.use('/home/communication/hearing', Communiction_HearingRouter)
app.use('/home/founding/member/message', Founding_MemberRouter)
app.use('/home/community', CommunityRouter)

// home url 
app.use('/about/hero', aboutHeroRouter)
app.use('/about/three/banner', AboutThreeBannerRouter)
app.use('/about/last/banner', aboutLastBannerRouter)

// news url 
app.use('/news', NewsRouter)

// gallery url 
app.use('/gallery', GallaryRouter)

// contact url 
app.use('/contact', ContactRouter)

// donation url 
app.use('/donation/faq', DonationFaqRouter)
app.use('/donation/amount', Donation_Text_and_AmountRouter)
app.use('/donation/medium', Donation_MediumRouter)

// footer url 

app.use('/footer', socialRouter)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})


// error handler middleware 

app.use(globalErrorHandler)


export default app