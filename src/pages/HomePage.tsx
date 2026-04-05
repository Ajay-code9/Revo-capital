import {TopContactBar} from '../components/TopContactBar';
import {Navbar} from '../components/Navbar';
import {Hero} from '../components/Hero';
import {MarketPricingBanner} from '../components/MarketPricingBanner';
import {MarketTabs} from '../components/MarketTabs';
import {Features} from '../components/Features';
import {CreateAccountBar} from '../components/CreateAccountBar';
import {TradingAchievements} from '../components/TradingAchievements';
import {AppDownloadSection} from '../components/AppDownloadSection';
import {ReadyForNextMoveSection} from '../components/ReadyForNextMoveSection';
import {AboutUs} from '../components/AboutUs';
import {Footer} from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <TopContactBar />
      <Navbar />

      <main>
        <Hero />
        <MarketPricingBanner />
        <MarketTabs />
        <Features />
        <CreateAccountBar />
        <TradingAchievements />
        <AppDownloadSection />
        <ReadyForNextMoveSection />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
