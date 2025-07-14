import React from "react";
import ExploreHeader from "../components/ExplorePage/ExploreHeader";
import PromoCarousel from "../components/ExplorePage/PromoCarousel";
import FilterItemsList from "../components/CarsComp/FilterItemsList";
import CarsCardList from "../components/CarsComp/CarsCardList";
import { Button } from "@mui/joy";
import Footer from "../components/Footer";

const CarsPage = () => {
  return (
    <div>
      <ExploreHeader />
      <div className="flex justify-center " data-aos="fade-right" data-aos-duration="3000">
        <PromoCarousel />
      </div>
      <section data-aos="fade-top" data-aos-duration="3000">
        <div className="flex justify-between p-5" >
          <h1 className="text-3xl font-[var(--title-font)]">
            Best Cars for Rent and Sell
          </h1>
          <Button sx={{paddingX : "1.5rem"}}> + Add Car</Button>
        </div>
        <FilterItemsList />
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3 mb-3" data-aos="fade-left" data-aos-duration="3000">
        <CarsCardList />
      </section>
          <Footer width="w-full" rounded=""/>

    </div>
  );
};

export default CarsPage;
