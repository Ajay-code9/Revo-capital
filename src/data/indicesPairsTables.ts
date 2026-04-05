export type IndicesSpecRow = {
  symbol: string;
  label: string;
  base: string;
  margin: string;
  swapLong: string;
  swapShort: string;
  spread: string;
};

export const CASH_INDICES_ROWS: IndicesSpecRow[] = [
  {symbol: 'AUS200.c', label: 'Australia 200 Cash Index', base: 'AUD', margin: '5%', swapLong: '-292.099', swapShort: '0.796', spread: '3.11'},
  {symbol: 'ES35.c', label: 'Spain 35 Cash Index', base: 'EUR', margin: '10%', swapLong: '-635.308', swapShort: '0.28', spread: '5.48'},
  {symbol: 'STOXX50.c', label: 'Euro 50 Cash index', base: 'EUR', margin: '5%', swapLong: '-226.967', swapShort: '0.1', spread: '1.76'},
  {symbol: 'F40.c', label: 'France 40 Cash Index', base: 'EUR', margin: '5%', swapLong: '-329.644', swapShort: '0.145', spread: '0.81'},
  {symbol: 'UK100.c', label: 'UK 100 Cash Index', base: 'GBP', margin: '5%', swapLong: '-293.105', swapShort: '23.009', spread: '0.72'},
  {symbol: 'DE40.c', label: 'Germany 40 Cash index', base: 'EUR', margin: '5%', swapLong: '-667.731', swapShort: '1.523', spread: '0.8'},
  {symbol: 'JP225.c', label: 'JPN225', base: 'JPY', margin: '5%', swapLong: '-1016.453', swapShort: '-815.54', spread: '7.75'},
  {symbol: 'USTEC.c', label: 'NAS100', base: 'USD', margin: '5%', swapLong: '-563.832', swapShort: '189.487', spread: '0.8'},
  {symbol: 'US500.c', label: 'SPX500', base: 'USD', margin: '5%', swapLong: '-153.341', swapShort: '51.533', spread: '0.35'},
  {symbol: 'SWI20.c', label: 'Switzerland 20 Cash index', base: 'CHF', margin: '10%', swapLong: '-334.724', swapShort: '-149.421', spread: '4.71'},
  {symbol: 'DJ30.c', label: 'Dow Jones 30', base: 'USD', margin: '5%', swapLong: '-983.608', swapShort: '407.213', spread: '2.3'},
  {symbol: 'HK50.c', label: 'Hong Kong', base: 'HKD', margin: '10%', swapLong: '-592.252', swapShort: '1.789', spread: '7.9'},
  {symbol: 'NE25.c', label: 'Netherlands 25 Cash Index', base: 'EUR', margin: '10%', swapLong: '-37.234', swapShort: '0.016', spread: '0'},
];

export const FUTURE_INDICES_ROWS: IndicesSpecRow[] = [
  {symbol: 'CHINAH.f', label: 'China H-Shares', base: 'HKD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'HK50.f', label: 'Hong Kong', base: 'HKD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'US500.f', label: 'SPX500 Future', base: 'USD', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'DE40.f', label: 'Germany 40 Future', base: 'EUR', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'DJ30.f', label: 'Dow Jones 30 Future', base: 'USD', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'USTEC.f', label: 'NAS100 Future', base: 'USD', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'ES35.f', label: 'Spain 35 Future', base: 'EUR', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'SWI20.f', label: 'Switzerland 20 Future', base: 'CHF', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'UK100.f', label: 'UK 100 future', base: 'GBP', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'DX.f', label: 'Dollar Index', base: 'USD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'JPN225.f', label: 'JAPAN 225 Future', base: 'JPY', margin: '5%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'NE25.f', label: 'Netherlands 25 Future', base: 'EUR', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'VIX.f', label: 'Volatility Index Future', base: 'USD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'US2000.f', label: 'US Small Cap 2000 Future', base: 'USD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'F40.f', label: 'France 40 Future', base: 'EUR', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'AUS200.f', label: 'Australia 200 Future', base: 'AUD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'SING.f', label: 'Singapore Index Future', base: 'SGD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'IND50.f', label: 'India 50 Future', base: 'USD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
  {symbol: 'EURUSD.f', label: 'Eurodollar Future', base: 'USD', margin: '10%', swapLong: '0', swapShort: '0', spread: '0'},
];
