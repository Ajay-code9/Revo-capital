import type {IndicesSpecRow} from './indicesPairsTables';

export type MetalsSpecRow = IndicesSpecRow & {
  /** Red square icon style from design */
  icon: 'network' | 'sun';
};

export const METALS_CFD_ROWS: MetalsSpecRow[] = [
  {symbol: 'XAGEUR', label: 'Silver vs Euro', base: 'EUR', margin: '10%', swapLong: '-2.319', swapShort: '1.028', spread: '0.36', icon: 'network'},
  {symbol: 'XAGUSD', label: 'Silver vs US-Dollar', base: 'USD', margin: '10%', swapLong: '-5.679', swapShort: '3.21', spread: '0.49', icon: 'sun'},
  {symbol: 'XAUEUR', label: 'Gold vs Euro', base: 'EUR', margin: '5%', swapLong: '-25.88', swapShort: '13.893', spread: '0.26', icon: 'network'},
  {symbol: 'XAUUSD', label: 'Gold vs US-Dollar', base: 'USD', margin: '5%', swapLong: '-54.74', swapShort: '32.813', spread: '0.19', icon: 'network'},
  {symbol: 'XPDUSD', label: 'Palladium vs US-Dollar', base: 'USD', margin: '10%', swapLong: '-20.147', swapShort: '7.52', spread: '7.4', icon: 'network'},
  {symbol: 'XPTUSD', label: 'Platinum vs US-Dollar', base: 'USD', margin: '10%', swapLong: '-4.446', swapShort: '-31.087', spread: '6.63', icon: 'sun'},
];
