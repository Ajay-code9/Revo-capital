export const ROUTES = {
  home: '/',
  forex: '/forex',
  indices: '/indices',
  futures: '/futures',
  crypto: '/crypto',
  metals: '/metals',
  stocks: '/stocks',
  accounts: '/accounts',
  platforms: '/platforms',
  partners: '/partners',
  partnersIntroducingBroker: '/partners/introducing-broker',
  partnersAffiliate: '/partners/affiliate',
  partnersMoneyManager: '/partners/money-manager',
  support: '/support',
  signup: '/signup',
  login: '/login',
} as const;

export const MARKET_PATHS: readonly string[] = [
  ROUTES.forex,
  ROUTES.indices,
  ROUTES.futures,
  ROUTES.crypto,
  ROUTES.metals,
  ROUTES.stocks,
];

export const PARTNER_PATHS: readonly string[] = [
  ROUTES.partners,
  ROUTES.partnersIntroducingBroker,
  ROUTES.partnersAffiliate,
  ROUTES.partnersMoneyManager,
];
