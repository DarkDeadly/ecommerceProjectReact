import React, { useState } from "react";
import ExploreHeader from "../components/ExplorePage/ExploreHeader";
import PromoCarousel from "../components/ExplorePage/PromoCarousel";
import FilterItemsList from "../components/CarsComp/FilterItemsList";
import CarsCardList from "../components/CarsComp/CarsCardList";
import { Button } from "@mui/joy";
import Footer from "../components/Footer";
import AddCarForm from "../components/CarsComp/AddCarForm";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";
const CarsPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {UserData ,setUserData} = useContext(UserContext)

  return (
    <div>
      <ExploreHeader />
      <div className="flex justify-center " data-aos="fade-right" data-aos-duration="3000">
        <PromoCarousel />
      </div>
      <section >
        <div className="flex justify-between p-5" >
          <h1 className="text-3xl font-[var(--title-font)]">
            Best Cars for Rent and Sell
          </h1>
          {UserData.user.role === "admin" && <Button sx={{paddingX : "1.5rem"}} onClick={handleOpen}> + Add Car</Button>}
          <div className="hidden">
             <AddCarForm openModal = {open} handleClose = {handleClose}/>
          </div>
        </div>
        <FilterItemsList />
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3 mb-3" >
        <CarsCardList />
      </section>
          <Footer width="w-full" rounded=""/>

    </div>
  );
};

export default CarsPage;
