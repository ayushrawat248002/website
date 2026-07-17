import { Bebas_Neue, Rock_Salt, Caveat } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const caveat = Caveat({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});