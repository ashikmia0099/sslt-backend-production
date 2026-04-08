import { DynamicDescriptions } from "../../../types/common";

export interface HeroSecondInput {
  ImagePostType: "SingleImage" | "DualImage";

  Doctor_Name?: string;
  Doctor_Position?: string;
  Working_place?: string;
  Description_Title?: string;
  Description?: string;
  SingleImage?: string;
  dynamicDescriptions?: DynamicDescriptions[];

  Choose_Dual_Type_Image_1?: string;
  Choose_Dual_Type_Image_2?: string;
}

