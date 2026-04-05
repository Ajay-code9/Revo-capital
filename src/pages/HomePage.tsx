import {RiskWarningBar} from '../components/RiskWarningBar';
import {TopContactBar} from '../components/TopContactBar';
import {Navbar} from '../components/Navbar';
import {Hero} from '../components/Hero';
import {TrustpilotBar} from '../components/TrustpilotBar';
import {MarketTabs} from '../components/MarketTabs';
import {Features} from '../components/Features';
import {CreateAccountBar} from '../components/CreateAccountBar';
import {PaymentMethods} from '../components/PaymentMethods';
import {Platforms} from '../components/Platforms';
import {AboutUs} from '../components/AboutUs';
import {Footer} from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <RiskWarningBar />
      <TopContactBar />
      <Navbar />

      <main>
        <Hero />
        <TrustpilotBar />
        <MarketTabs />
        <Features />
        <CreateAccountBar />
        <PaymentMethods />
        <Platforms />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
