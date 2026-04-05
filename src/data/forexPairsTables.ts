/** Row for forex specs table; optional `icon` = two lines joined by \n for red badge (majors). */
export type ForexPairRow = {
  symbol: string;
  label: string;
  base: string;
  margin: string;
  swapLong: string;
  swapShort: string;
  spread: string;
  icon?: string;
};

export const MAJORS_FOREX_ROWS: ForexPairRow[] = [
  {symbol: 'EURCHF', label: 'Euro vs Swiss Franc', icon: '€\nCHF', base: 'EUR', margin: '3.33%', swapLong: '3.154', swapShort: '-8.997', spread: '1.82'},
  {symbol: 'EURGBP', label: 'Euro vs Great Britain Pound', icon: '€\n£', base: 'EUR', margin: '3.33%', swapLong: '-7.418', swapShort: '2.374', spread: '1.42'},
  {symbol: 'EURJPY', label: 'Euro vs Japanese Yen', icon: '€\n¥', base: 'EUR', margin: '3.33%', swapLong: '4.939', swapShort: '-10.518', spread: '1.8'},
  {symbol: 'EURUSD', label: 'Euro vs US Dollar', icon: '€\n$', base: 'EUR', margin: '3.33%', swapLong: '-11.279', swapShort: '4.797', spread: '1.02'},
  {symbol: 'GBPUSD', label: 'Great Britain Pound vs US Dollar', icon: '£\n$', base: 'GBP', margin: '3.33%', swapLong: '-4.961', swapShort: '-0.866', spread: '2.57'},
  {symbol: 'USDCHF', label: 'US Dollar vs Swiss Franc', icon: '$\nCHF', base: 'USD', margin: '3.33%', swapLong: '7.088', swapShort: '-13.993', spread: '2.11'},
  {symbol: 'USDJPY', label: 'US Dollar vs Japanese Yen', icon: '$\n¥', base: 'USD', margin: '3.33%', swapLong: '11.653', swapShort: '-21.317', spread: '2.05'},
  {symbol: 'GBPJPY', label: 'Great Britain Pound vs Japanese Yen', icon: '£\n¥', base: 'GBP', margin: '3.33%', swapLong: '13.712', swapShort: '-25.822', spread: '2.47'},
];

export const MINOR_FOREX_ROWS: ForexPairRow[] = [
  {symbol: 'AUDUSD', label: 'Australian Dollar vs US Dollar', base: 'AUD', margin: '5%', swapLong: '-3.943', swapShort: '-0.842', spread: '5.46'},
  {symbol: 'AUDCAD', label: 'Australian Dollar vs Canadian Dollar', base: 'AUD', margin: '5%', swapLong: '1.104', swapShort: '-4.2', spread: '8.33'},
  {symbol: 'AUDCHF', label: 'Australian Dollar vs Swiss Franc', base: 'AUD', margin: '5%', swapLong: '3.793', swapShort: '-7.781', spread: '2'},
  {symbol: 'AUDJPY', label: 'Australian Dollar vs Japanese Yen', base: 'AUD', margin: '5%', swapLong: '6.308', swapShort: '-11.174', spread: '1.26'},
  {symbol: 'AUDNOK', label: 'Australian Dollar vs Norwegian Kroner', base: 'AUD', margin: '5%', swapLong: '-1.99', swapShort: '0.173', spread: '8.77'},
  {symbol: 'AUDNZD', label: 'Australian Dollar vs New Zealand Dollar', base: 'AUD', margin: '5%', swapLong: '0.232', swapShort: '-3.416', spread: '9.7'},
  {symbol: 'AUDSEK', label: 'Australian Dollar vs Swedish Krona', base: 'AUD', margin: '5%', swapLong: '1.588', swapShort: '-4.146', spread: '7.52'},
  {symbol: 'CADCHF', label: 'Canadian Dollar vs Swiss Franc', base: 'CAD', margin: '5%', swapLong: '2.947', swapShort: '-6.716', spread: '1.81'},
  {symbol: 'CADJPY', label: 'Canadian Dollar vs Japanese Yen', base: 'CAD', margin: '5%', swapLong: '4.64', swapShort: '-8.962', spread: '1'},
  {symbol: 'CHFJPY', label: 'Swiss Frank vs Japanese Yen', base: 'CHF', margin: '5%', swapLong: '-5.616', swapShort: '1.132', spread: '2.08'},
  {symbol: 'CHFDKK', label: 'Swiss Frank vs Danish Krone', base: 'CHF', margin: '5%', swapLong: '-5.794', swapShort: '2.426', spread: '5.24'},
  {symbol: 'CHFNOK', label: 'Swiss Frank vs Norwegian Kroner', base: 'CHF', margin: '5%', swapLong: '-194.91', swapShort: '117.428', spread: '1.8'},
  {symbol: 'CHFPLN', label: 'Swiss Frank vs Polish Zloty', base: 'CHF', margin: '5%', swapLong: '-83.655', swapShort: '49.833', spread: '5.8'},
  {symbol: 'EURAUD', label: 'Euro vs Australian Dollar', base: 'EUR', margin: '5%', swapLong: '-11.946', swapShort: '5.329', spread: '1.37'},
  {symbol: 'EURCAD', label: 'Euro vs Canadian Dollar', base: 'EUR', margin: '5%', swapLong: '-5.593', swapShort: '0.996', spread: '8.21'},
  {symbol: 'EURNOK', label: 'Euro vs Norwegian Kroner', base: 'EUR', margin: '5%', swapLong: '-98.28', swapShort: '50.281', spread: '8.48'},
  {symbol: 'EURNZD', label: 'Euro vs New Zealand Dollar', base: 'EUR', margin: '5%', swapLong: '-9.968', swapShort: '3.511', spread: '2.09'},
  {symbol: 'EURPLN', label: 'Euro vs Polish Zloty', base: 'EUR', margin: '5%', swapLong: '-48.157', swapShort: '25.514', spread: '2.03'},
  {symbol: 'EURSEK', label: 'Euro vs Swedish Krona', base: 'EUR', margin: '5%', swapLong: '-17.024', swapShort: '-12.695', spread: '5.93'},
  {symbol: 'GBPAUD', label: 'Great Britain Pound vs Australian Dollar', base: 'GBP', margin: '5%', swapLong: '-2.282', swapShort: '-5.768', spread: '1.54'},
  {symbol: 'GBPCAD', label: 'Great Britain Pound vs Canadian Dollar', base: 'GBP', margin: '5%', swapLong: '2.731', swapShort: '-11.443', spread: '2.6'},
  {symbol: 'GBPCHF', label: 'Great Britain Pound vs Swiss Franc', base: 'GBP', margin: '5%', swapLong: '7.412', swapShort: '-18.79', spread: '2.6'},
  {symbol: 'GBPDKK', label: 'Great Britain Pound vs Danish Krone', base: 'GBP', margin: '5%', swapLong: '3.232', swapShort: '-8.504', spread: '2.11'},
  {symbol: 'GBPNOK', label: 'Great Britain Pound vs Norwegian Kroner', base: 'GBP', margin: '5%', swapLong: '-36.937', swapShort: '-12.835', spread: '1.44'},
  {symbol: 'GBPNZD', label: 'Great Britain Pound vs New Zealand Dollar', base: 'GBP', margin: '5%', swapLong: '1.436', swapShort: '-10.869', spread: '5.6'},
  {symbol: 'GBPPLN', label: 'Great Britain Pound vs Polish Zloty', base: 'GBP', margin: '5%', swapLong: '-29.016', swapShort: '4.814', spread: '3.37'},
  {symbol: 'GBPSEK', label: 'Great Britain Pound vs Swedish Krona', base: 'GBP', margin: '5%', swapLong: '35.184', swapShort: '-104.212', spread: '1.42'},
  {symbol: 'NOKJPY', label: 'Norwegian Kroner vs Japanese Yen', base: 'NOK', margin: '5%', swapLong: '1.105', swapShort: '-1.952', spread: '1.63'},
  {symbol: 'NOKSEK', label: 'Norwegian Kroner vs Swedish Krona', base: 'NOK', margin: '5%', swapLong: '3.353', swapShort: '-7.839', spread: '1.67'},
  {symbol: 'NZDCAD', label: 'New Zealand Dollar vs Canadian Dollar', base: 'NZD', margin: '5%', swapLong: '-0.199', swapShort: '-2.258', spread: '1.88'},
  {symbol: 'NZDCHF', label: 'New Zealand Dollar vs Swiss Franc', base: 'NZD', margin: '5%', swapLong: '2.872', swapShort: '-6.271', spread: '1.62'},
  {symbol: 'NZDJPY', label: 'New Zealand Dollar vs Japanese Yen', base: 'NZD', margin: '5%', swapLong: '4.648', swapShort: '-8.611', spread: '1.72'},
  {symbol: 'NZDUSD', label: 'New Zealand Dollar vs US Dollar', base: 'NZD', margin: '5%', swapLong: '-3.814', swapShort: '0.739', spread: '5.7'},
  {symbol: 'SEKJPY', label: 'Swedish Krona vs Japanese Yen', base: 'SEK', margin: '5%', swapLong: '0.468', swapShort: '-1.013', spread: '1.73'},
  {symbol: 'USDCAD', label: 'US Dollar vs Canadian Dollar', base: 'USD', margin: '5%', swapLong: '3.743', swapShort: '-10.074', spread: '7.66'},
  {symbol: 'USDDKK', label: 'US Dollar vs Danish Krone', base: 'USD', margin: '5%', swapLong: '34.213', swapShort: '-67.287', spread: '7.97'},
  {symbol: 'USDHKD', label: 'US Dollar vs Hong Kong Dollar', base: 'USD', margin: '5%', swapLong: '37.416', swapShort: '-78.858', spread: '8.55'},
  {symbol: 'USDNOK', label: 'US Dollar vs Norwegian Kroner', base: 'USD', margin: '5%', swapLong: '-5.522', swapShort: '-26.29', spread: '1.11'},
  {symbol: 'USDPLN', label: 'US Dollar vs Polish Zloty', base: 'USD', margin: '5%', swapLong: '-13.28', swapShort: '1.702', spread: '2.21'},
  {symbol: 'USDSEK', label: 'US Dollar vs Swedish Krona', base: 'USD', margin: '5%', swapLong: '41.849', swapShort: '-85.036', spread: '1.09'},
];

export const EXOTIC_FOREX_ROWS: ForexPairRow[] = [
  {symbol: 'AUDSGD', label: 'Australian Dollar vs Singapur Dollar', base: 'AUD', margin: '5%', swapLong: '2.548', swapShort: '-7.57', spread: '2.09'},
  {symbol: 'CHFSGD', label: 'Swiss Franc vs Singapore Dollar', base: 'CHF', margin: '5%', swapLong: '-12.668', swapShort: '4.294', spread: '0'},
  {symbol: 'EURHKD', label: 'Euro vs Hong Kong Dollar', base: 'EUR', margin: '5%', swapLong: '-11.911', swapShort: '-21.154', spread: '8.54'},
  {symbol: 'EURHUF', label: 'Euro vs Hungarian Forint', base: 'EUR', margin: '5%', swapLong: '-122.312', swapShort: '73.405', spread: '2.84'},
  {symbol: 'EURMXN', label: 'Euro vs Mexican Peso', base: 'EUR', margin: '5%', swapLong: '-509.711', swapShort: '258.338', spread: '5.96'},
  {symbol: 'EURSGD', label: 'Euro vs Singapore Dollar', base: 'EUR', margin: '5%', swapLong: '-1.708', swapShort: '-4.797', spread: '3.4'},
  {symbol: 'EURTRY', label: 'Euro vs Turkish Lira', base: 'EUR', margin: '5%', swapLong: '-4624.448', swapShort: '3870.249', spread: '8.69'},
  {symbol: 'GBPSGD', label: 'Great Britain Pound vs Singapore Dollar', base: 'GBP', margin: '5%', swapLong: '6.408', swapShort: '-16.31', spread: '3.79'},
  {symbol: 'GBPZAR', label: 'Great Britain Pound vs South African Rand', base: 'GBP', margin: '5%', swapLong: '-28.318', swapShort: '11.452', spread: '3.1'},
  {symbol: 'HKDJPY', label: 'Hong Kong Dollar vs Japanese Yen', base: 'HKD', margin: '5%', swapLong: '0.35', swapShort: '-1.143', spread: '2.16'},
  {symbol: 'MXNJPY', label: 'Mexican Peso vs Japanese Yen', base: 'MXN', margin: '5%', swapLong: '1.242', swapShort: '-2.154', spread: '2.9'},
  {symbol: 'NZDSGD', label: 'New Zealand Dollar vs Singapore Dollar', base: 'NZD', margin: '5%', swapLong: '1.046', swapShort: '-5.312', spread: '2.42'},
  {symbol: 'SGDJPY', label: 'Singapore Dollar vs Japanese Yen', base: 'SGD', margin: '5%', swapLong: '1.851', swapShort: '-5.897', spread: '1.79'},
  {symbol: 'TRYJPY', label: 'Turkish Lira vs Japanese Yen', base: 'TRY', margin: '5%', swapLong: '2.014', swapShort: '-4.123', spread: '6.57'},
  {symbol: 'USDCNH', label: 'US Dollar vs Chinese Yuan Renminbi', base: 'USD', margin: '5%', swapLong: '39.01', swapShort: '-78.39', spread: '0'},
  {symbol: 'USDCZK', label: 'US Dollar vs Czech Koruna', base: 'USD', margin: '5%', swapLong: '1.004', swapShort: '-11.922', spread: '9.7'},
  {symbol: 'USDHUF', label: 'US Dollar vs Hungarian Forint', base: 'USD', margin: '5%', swapLong: '-52.229', swapShort: '25.564', spread: '3.78'},
  {symbol: 'USDMXN', label: 'US Dollar vs Mexican Peso', base: 'USD', margin: '5%', swapLong: '-295.448', swapShort: '116.93', spread: '2.69'},
  {symbol: 'USDRUB', label: 'US Dollar vs Russian Rouble', base: 'USD', margin: '5%', swapLong: '-514.944', swapShort: '222.037', spread: '0'},
  {symbol: 'USDSGD', label: 'US Dollar vs Singapore Dollar', base: 'USD', margin: '5%', swapLong: '6.001', swapShort: '-14.04', spread: '1.91'},
  {symbol: 'USDTRY', label: 'US Dollar vs Turkish Lira', base: 'USD', margin: '5%', swapLong: '-3487.809', swapShort: '2267.372', spread: '5.48'},
  {symbol: 'USDZAR', label: 'US Dollar vs South African Rand', base: 'USD', margin: '5%', swapLong: '-185.211', swapShort: '63.661', spread: '9.31'},
  {symbol: 'ZARJPY', label: 'South African Rand vs Japanese Yen', base: 'ZAR', margin: '5%', swapLong: '1.036', swapShort: '-1.983', spread: '5.85'},
];

export type ForexPairCategory = 'majors' | 'minors' | 'exotics';

/** Badge lines: explicit icon (majors) or split 6-char symbol into 3+3. */
export function forexPairIconLines(row: ForexPairRow): string[] {
  if (row.icon) return row.icon.split('\n');
  const {symbol} = row;
  if (symbol.length >= 6) return [symbol.slice(0, 3), symbol.slice(3)];
  return [symbol];
}

export const FOREX_PAIR_TABS: {
  id: ForexPairCategory;
  segmentLabel: string;
  tableHeading: string;
  rows: ForexPairRow[];
}[] = [
  {id: 'majors', segmentLabel: 'Majors Pairs', tableHeading: 'Majors Forex Pairs', rows: MAJORS_FOREX_ROWS},
  {id: 'minors', segmentLabel: 'Minor Pairs', tableHeading: 'Minors Forex Pairs', rows: MINOR_FOREX_ROWS},
  {id: 'exotics', segmentLabel: 'Exotics Pairs', tableHeading: 'Exotics Forex Pairs', rows: EXOTIC_FOREX_ROWS},
];
