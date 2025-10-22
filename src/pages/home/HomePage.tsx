import Navbar from '../../components/Navbar';
import HeroSearch from '../../components/home/HeroSearch';
import FeaturedProjects from '../../components/home/FeaturedProjects';
import PropertiesByLocation from '../../components/home/PropertiesByLocation';
import PropertiesForSale from '../../components/home/PropertiesForSale';
import PropertiesForRent from '../../components/home/PropertiesForRent';
import FeaturedAgents from '../../components/home/FeaturedAgents';
import NewsSection from '../../components/home/NewsSection';
import Footer from '../../components/Footer';
import TopHeader from '../../components/TopHeader';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Navbar />
      <HeroSearch />
      <FeaturedProjects />
      <PropertiesByLocation />
      <PropertiesForSale />
      <PropertiesForRent />
      <FeaturedAgents />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
