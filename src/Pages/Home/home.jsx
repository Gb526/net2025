import React from "react";
import Header from  "../../Components/Header/header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import RowList from "../../Components/RowList/RowList.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Banner /> 
      <RowList/>
      <Footer />
      <RowList/>
    </div>
  );
}

export default Home;
