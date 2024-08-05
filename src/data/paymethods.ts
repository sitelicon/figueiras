import type { Payments } from './types';

export const paymentMethods: Payments[] = [
  {
    id: 1,
    method: 'PayPal',
    img: '/figueiras/payments/paypal.png',
  },
  {
    id: 2,
    method: 'Visa',
    img: '/figueiras/payments/visa.png',
  },
  {
    id: 3,
    method: 'Mastercard',
    img: '/figueiras/payments/mastercard.png',
  },
  {
    id: 4,
    method: 'American Express',
    img: '/figueiras/payments/amex.png',
  },
  {
    id: 5,
    method: 'Discover',
    img: '/figueiras/payments/discover.jpg',
  },
];
