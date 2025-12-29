import * as React from "react";
import { useEffect } from "react";
import Navbar from "../../components/navigation/Navbar";
import ContactForm from "./ContactForm";
import Footer from "../../components/global/Footer";
import HeaderComponent from "../products/HeaderComp";
import "../../css/contact.css";
import scrollToTop from "../../components/global/scrollToTop";


function ContactUs() {

// scroll to top upon viewing page
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <>
      <Navbar />
      <HeaderComponent 
       pricesImage="contactHeaderImage"
       titlePricesHeader="Kontakt oss"
      />
      <div className="container contact-intro">
        <h1>Fyll ut skjemaet for å komme i kontakt med oss.</h1>
        <small className="contact-us-magazine">Om du skal bestille tidsskriftet KONTAKT velger du det fra alternativene i emnefeltet. Husk å skrive din adresse, ditt telefonnummer og ditt fulle navn i meldingsfeltet. <span className="p-break-contact-form">Du vil få en bekreftelses e-post på din henvendelse og / eller bestilling.</span></small>
      </div>
     
      <ContactForm />
      <Footer />
    </>
  );
}

export default ContactUs;
