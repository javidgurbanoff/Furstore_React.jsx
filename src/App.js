import React from "react";
import "./index.css";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";
import Header from "./features/header/header";
import MainImg from "./components/MainImg/MainImg";
import TripleFurniture from "./components/TripleFurniture/TripleFurniture";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Subscribe from "./components/subscribe/Subscribe";
import LatestNews from "./components/LatestNews/LatestNews";
import Footer from "./features/footer/footer";

function App() {
  return (
    <div>
      <WelcomeModal />
      <Header />
      <MainImg />
      <TripleFurniture />
      <FeaturedProducts />
      <Subscribe />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
