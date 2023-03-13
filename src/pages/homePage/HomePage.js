import React from "react";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import ShowsAdd from "../../components/showsAdd/ShowsAdd";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <ShowsAdd />
      <Footer />
    </div>
  );
};

export default HomePage;
