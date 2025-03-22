import LatestItems from "./components/LatestItems";
import Testimonial from "./components/Testimonial";
import SecureCards from "./components/SecureCards";
import HeroSection from "./components/HeroSection";
import ItemCards from "./components/ItemCards";
const Home = () => {
  return (
    <>
      <HeroSection />
      <ItemCards />
      <LatestItems />
      <Testimonial />
      <SecureCards />
    </>
  );
};

export default Home;
