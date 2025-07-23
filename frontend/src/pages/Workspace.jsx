import React from "react";
import ExploreHeader from "../components/ExplorePage/ExploreHeader";
import PromoCarousel from "../components/ExplorePage/PromoCarousel";
import { useEffect } from "react";
import Aos from "aos";
import Anoucement from "../components/ExplorePage/Anoucement";
import "../components/ExplorePage/workspace.css"
import PopularCars from "../components/ExplorePage/PopularCars";
import Reasons from "../components/ExplorePage/Reasons";
import Footer from "../components/Footer";
const Workspace = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <ExploreHeader />
      <div className="flex justify-center my-5" >
        <PromoCarousel />
      </div>
      <div className="bg-[var(--third-color)] border-4 border-[var(--third-color)] flex justify-center" data-aos="fade-left" data-aos-duration="3000">
        <Anoucement />
      </div>
      <section className="bg-gradient-to-b from-black to-white  w-full p-10 mb-5"></section>
      <div className="flex flex-col items-center  p-5">
        <h1 className="text-3xl font-bold mb-5">Popular Cars </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 w-full gap-3" >
              <PopularCars/>
      </div>
      
      </div>
      <Reasons/>
      <Footer width="w-full" rounded=""/>
    </div>
  );
};

export default Workspace;
