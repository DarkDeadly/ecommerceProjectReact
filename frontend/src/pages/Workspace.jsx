import React from "react";
import ExploreHeader from "../components/ExplorePage/ExploreHeader";
import PromoCarousel from "../components/ExplorePage/PromoCarousel";
import { useEffect } from "react";
import Aos from "aos";
import Anoucement from "../components/ExplorePage/Anoucement";
import "../components/ExplorePage/workspace.css"
const Workspace = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div>
      <ExploreHeader />
      <div className="flex justify-center my-5" data-aos="fade-right" data-aos-duration="3000">
        <PromoCarousel />
      </div>
      <div className="bg-[var(--third-color)] border-4 border-[var(--third-color)] flex justify-center" data-aos="fade-left" data-aos-duration="3000">
        <Anoucement />
      </div>
      <section className="bg-black w-full p-10 mb-5"></section>
      
    </div>
  );
};

export default Workspace;
