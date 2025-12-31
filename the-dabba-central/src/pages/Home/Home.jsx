import React from "react";
import "./Home.scss";
import { PageContainer } from "@components";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PricingSection from "./components/PricingSection/PricingSection";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import CTASection from "./components/CTASection/CTASection";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <HowItWorks />
      <PricingSection />
      <CustomerReviews />
      <GoogleReviews />
      <CTASection />
    </PageContainer>
  );
};

export default Home;
