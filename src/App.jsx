
import BrandInfoBanner from './components/BrandInfoBanner';
import HeroBanner from './components/HeroBanner';
import FeaturedCollections from './components/FeaturedCollections';
import BestSellers from './components/BestSellers';
import ProductGallery from './components/ProductGallery';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <>
  <BrandInfoBanner />
  <HeroBanner />
  <FeaturedCollections />
  <BestSellers />
  <ProductGallery />
  <Checkout />
  {/* Add more homepage sections here: New Arrivals, etc. */}
    </>
  );
}

export default App;
