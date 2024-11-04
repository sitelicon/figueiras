import type { Payments } from "./types";

export const paymentMethods: Payments[] = [
  {
    id: 1,
    method: "PayPal",
    img: "/payments/paypal.png",
  },
  {
    id: 2,
    method: "Visa",
    img: "/payments/visa.png",
  },
  {
    id: 3,
    method: "Mastercard",
    img: "/payments/mastercard.png",
  },
  {
    id: 4,
    method: "American Express",
    img: "/payments/amex.png",
  },
  {
    id: 5,
    method: "Discover",
    img: "/payments/discover.jpg",
  },
];
