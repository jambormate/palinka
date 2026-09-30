import type { GyumolcsKartyaAdat } from "./palinka";

export const alapanyagok = [
  "Alma",
  "Körte",
  "Szilva",
  "Meggy",
  "Kajszibarack",
];

export const nepszeruPalinkak = [
  "Szilvapálinka",
  "Barackpálinka",
  "Körtepálinka",
  "Almapálinka",
  "Birsalmapálinka",
];

export const izEsIllatjegyek = [
  "Gyümölcsös",
  "Illatos",
  "Érett gyümölcsre jellemző",
  "Harmonikus",
  "Tiszta lecsengésű",
];

export const gyumolcsok = [
  "Alma",
  "Szilva",
  "Körte",
  "Meggy",
  "Kajszi",
  "Birsalma",
  "Cseresznye",
  "Őszibarack",
  "Szőlő",
];
export const gyumolcsKartyak: GyumolcsKartyaAdat[] = [
  {
    nev: "Banán",
    kep: "/images/Banán.jpg",
    leiras:
      "A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag.",
  },
  {
    nev: "Birsalma",
    kep: "/images/birsalma.jpg",
    leiras:
      "A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető.",
  },
  {
    nev: "Mogyoró",
    kep: "/images/mogyoro.jpg",
    leiras:
      "A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik.",
  },
  {
    nev: "Gránátalma",
    kep: "/images/granatalma.jpg",
    leiras:
      "A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal.",
  },
];