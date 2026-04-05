import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {ScrollToTop} from './routes/ScrollToTop';
import {ROUTES} from './routes/paths';
import {HomePage} from './pages/HomePage';
import {ForexPage} from './pages/ForexPage';
import {IndicesPage} from './pages/IndicesPage';
import {FuturesPage} from './pages/FuturesPage';
import {CryptoPage} from './pages/CryptoPage';
import {MetalsPage} from './pages/MetalsPage';
import {StocksPage} from './pages/StocksPage';
import {AccountTypesPage} from './pages/AccountTypesPage';
import {PlatformsPage} from './pages/PlatformsPage';
import {PartnersPage} from './pages/PartnersPage';
import {IntroducingBrokerPage} from './pages/IntroducingBrokerPage';
import {AffiliatePage} from './pages/AffiliatePage';
import {MoneyManagerPage} from './pages/MoneyManagerPage';
import {SupportPage} from './pages/SupportPage';
import {SignUpPage} from './pages/SignUpPage';
import {LoginPage} from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.forex} element={<ForexPage />} />
        <Route path={ROUTES.indices} element={<IndicesPage />} />
        <Route path={ROUTES.futures} element={<FuturesPage />} />
        <Route path={ROUTES.crypto} element={<CryptoPage />} />
        <Route path={ROUTES.metals} element={<MetalsPage />} />
        <Route path={ROUTES.stocks} element={<StocksPage />} />
        <Route path={ROUTES.accounts} element={<AccountTypesPage />} />
        <Route path={ROUTES.platforms} element={<PlatformsPage />} />
        <Route path={ROUTES.partners} element={<PartnersPage />} />
        <Route path={ROUTES.partnersIntroducingBroker} element={<IntroducingBrokerPage />} />
        <Route path={ROUTES.partnersAffiliate} element={<AffiliatePage />} />
        <Route path={ROUTES.partnersMoneyManager} element={<MoneyManagerPage />} />
        <Route path={ROUTES.support} element={<SupportPage />} />
        <Route path={ROUTES.signup} element={<SignUpPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
