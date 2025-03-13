import CommonButton from "@/components/shared/common-button/CommonButton";
import Container from "@/components/shared/max-w-container/Container";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <Container className="px-4" weight={1320}>
        <div className="">
          <p className="text-[#278D45]">
            We have 30 years of agriculture & eco farming experience
          </p>
          <h2 className="text-3xl font-bold">
            Providing The Finest Products To The Best Feed Suppliers.
          </h2>
          <p className="text-[#6e7673]">
            Elders is headquartered in Adelaide, South Australia, where our
            story began in 1839, but our expansive network now reaches every
            corner of Australia.
          </p>
          <p className="text-[#6e7673]">
            At Mycorrhizal Applications (MA), we are dedicated to sustainability
            by providing the agriculture, horticulture, landscaping, and
            forestry industries with efficient and effective microbial-based
            biorational solutions. As the world’s leading manufacturer and
            supplier of mycorrhizal soil inoculants, MA researches, produces,
            and markets mycorrhizal fungi which accelerate plant performance.
          </p>
          <CommonButton>More About Us</CommonButton>
          <Image
            style={{ width: "100%" }}
            width={820}
            height={375}
            alt="hut-d"
            src={"/hut.webp"}
          />
        </div>
        <div>
          <div className="bg-[#F8C32C] rounded-2xl p-5">
            <div className="border border-white rounded-2xl border-dashed">
              <div className="p-6 text-[#52320A]">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-xl">Trust By Clients</h4>
                  <Image
                    width={45}
                    height={45}
                    src={"/icons/rice.svg"}
                    alt=""
                  />
                </div>
                <h3 className="font-bold text-3xl">1296+</h3>
                <p>
                  We are trusted by thousands of clients worldwide for our
                  exceptional services.
                </p>
              </div>
            </div>
          </div>
          {/* bfd */}
          <div className="bg-[#0D401C] rounded-2xl p-5">
            <div className="border border-white rounded-2xl border-dashed">
              <div className="p-6 text-white">
                <div className="flex items-center gap-4">
                  <Image
                    height={18}
                    width={18}
                    src={"/icons/mark.svg"}
                    alt=""
                  />
                  <h3>Modern Agriculture Equipment</h3>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    height={18}
                    width={18}
                    src={"/icons/mark.svg"}
                    alt=""
                  />
                  <h3>Awesome Harvest of Wheat</h3>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    height={18}
                    width={18}
                    src={"/icons/mark.svg"}
                    alt=""
                  />
                  <h3>Fresh Fruits & Vegetables</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
