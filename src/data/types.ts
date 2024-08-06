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
  title: string;
  backgroundPc: string;
  backgroundMobile: string;
  description: string;
  registerNumber: string;
  bookingImg: string;
}

export type FigueirasHouse = 'Alameda 23' | 'Jovellanos 19' | 'Alameda 33';

export interface Review {
  id: number;
  review: string;
  title: string;
  description: string;
  name: string;
  house: FigueirasHouse;
  date: string;
}

export interface News {
  id: number;
  img: string;
  title: string;
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
