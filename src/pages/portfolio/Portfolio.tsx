import * as React from 'react'
import { useEffect } from 'react';
import "../../css/portfolio.css";
import Navbarr from "../../components/global/Navbar";
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
        <Navbarr />
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