export interface NavBarItems {
  route: string;
  title: string;
}

type Langs = 'Español' | 'English' | 'Deustch';

export interface LangsI {
  lang: Langs;
  route: string;
}

export interface Brands {
  name: string;
  src: string;
}

export interface CarouselHome {
  alt: string;
  src: string;
}

export interface House {
  id: number;
  title_es: string;
  title_en: string;
  title_de: string;
  backgroundPc: string;
  backgroundMobile: string;
  description_es: string;
  description_en: string;
  description_de: string;
  registerNumber: string;
  bookingImg: string;
  url: string;
}

export type FigueirasHouse = 'Alameda 23' | 'Jovellanos 19' | 'Alameda 33';

export interface Review {
  id: number;
  review: string;
  title_es: string;
  title_en: string;
  title_de: string;
  description_es: string;
  description_en: string;
  description_de: string;
  name: string;
  house: FigueirasHouse;
  date_es: string;
  date_en: string;
  date_de: string;
  link: string;
}

export interface News {
  id: number;
  img: string;
  title_es: string;
  title_en: string;
  title_de: string;
  link: string;
}

type PaymentMethods =
  | 'Visa'
  | 'Mastercard'
  | 'PayPal'
  | 'American Express'
  | 'Discover';

export interface Payments {
  id: number;
  method: PaymentMethods;
  img: string;
}
