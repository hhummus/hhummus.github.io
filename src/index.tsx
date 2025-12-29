import * as React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider}  from "react-router-dom";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AboutPage from "./pages/about/AboutPage";
import ContactUs from "./pages/contactUs/ContactUs";
import Prices from "./pages/products/Prices";
import Portfolio from "./pages/portfolio/Portfolio";
import Kok from "./pages/portfolio/kok/Kok";
import NewMovements from "./pages/portfolio/new-movements/NewMovements";
import Ambijus from "./pages/portfolio/ambijus/Ambijus";
import CliffCabin from "./pages/portfolio/cliff-cabin/CliffCabin";
import Vinbaren from "./pages/portfolio/winebar-molla/Vinbaren";
import Torungen from "./pages/portfolio/torungen/Torungen"
import Magazine from "./pages/magazine/Magazine";
import WilderKitchen from "./pages/portfolio/wilder-kitchen/WilderKitchen";
import Bergill from "./pages/portfolio/bergill/Bergill";
import Sovesveis from "./pages/portfolio/sovesveis/Sovesveis";
import AirBnb from "./pages/airbnb/AirBnb";
import Wedding from "./pages/wedding/Wedding";


const router = createBrowserRouter( 
  createRoutesFromElements(
  
  <Route>
    <Route path="/" index element={ <App />}></Route>
    <Route path="om-oss" element={ <AboutPage />}></Route>
    <Route path="kontakt-oss" element={ <ContactUs />}></Route>
    <Route path="/prislister" element={ <Prices />}></Route>
    <Route path="/bryllup" element={ <Wedding />}></Route>
    <Route path="tidligere-arbeid" element={ <Portfolio />}></Route>
    <Route path="tidligere-arbeid/kok" element={ <Kok />}></Route>
    <Route path="tidligere-arbeid/new-movements" element={ <NewMovements />}></Route>
    <Route path="tidligere-arbeid/ambijus" element={ <Ambijus />}></Route>
    <Route path="tidligere-arbeid/cliff-cabin" element={ <CliffCabin />}></Route>
    <Route path="tidligere-arbeid/vinbaren-pa-molla" element={ <Vinbaren />}></Route>
    <Route path="tidligere-arbeid/torungen-design" element={ <Torungen />}></Route>
    <Route path="tidligere-arbeid/wilder-kitchen" element={ <WilderKitchen/>}></Route>
    <Route path="tidligere-arbeid/bergill" element={ <Bergill />}></Route>
    <Route path="tidligere-arbeid/sovesveis" element={ <Sovesveis />}></Route>
    <Route path="/tidsskrift-kontakt" element={<Magazine />}></Route>
    <Route path="/boligfotografering" element={<AirBnb />}></Route>
  </Route>
  ))

  const rootElement = document.getElementById("root")
    // specifying type of rootElement as html element. id root will always exist
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

