import * as React from 'react'
import { useEffect } from 'react';
import "../../css/portfolio.css";
import Navbar from "../../components/navigation/Navbar";
import HeaderComponent from '../products/HeaderComp'
import Footer from '../../components/global/Footer';
import PortfolioNavigation from './PortfolioNavigation';
import scrollToTop from '../../components/global/scrollToTop';

function Portfolio() {
  
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div>
        <Navbar />
        <HeaderComponent 
       pricesImage="portfolioHeaderImage"
       titlePricesHeader="Tidligere arbeid"
      />
      <PortfolioNavigation />
      <Footer />
    </div>
  )
}

export default Portfolio