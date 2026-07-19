import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import Hero from "../components/home/Hero/Hero";
import Newsletter from "../components/home/Newsletter/Newsletter";
import OfferBanner from "../components/home/OfferBanner/OfferBanner";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <OfferBanner />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

export default Home;
