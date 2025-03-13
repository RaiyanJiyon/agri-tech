import Image from "next/image";
import HeroBanner from "./hero-section/HeroBanner";
import ServicesOverview from "./services-section/ServicesOverview";
import AboutUs from "./about-us-section/AboutUs";

const HomePage = () => {
  return (
    <section className="relative">
      <HeroBanner />

      <div className="relative -mt-2.5 lg:-mt-5 z-20">
        <Image
          style={{ width: "100%" }}
          alt="Service Mask"
          width={1920}
          height={10}
          className="absolute top-0 left-0 z-20"
          src={"/shapes/serviceMask.svg"}
        />
      </div>
      <ServicesOverview />
      <AboutUs />
    </section>
  );
};

export default HomePage;
