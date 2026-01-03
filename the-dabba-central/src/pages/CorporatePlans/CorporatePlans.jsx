import React from "react";
// import "./CorporatePlans.scss";

import { PageContainer } from "@components";

import CPHero from "./components/CPHero/CPHero";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import TailoredCorporatePlans from "./components/TailoredCorporatePlans/TailoredCorporatePlans";
import HassleFreeExperience from "./components/HassleFreeExperience/HassleFreeExperience";
import CorporateFormSection from "./components/CorporateFormSection/CorporateFormSection";
import BuiltAroundYourTeam from "./components/BuiltAroundYourTeam/BuiltAroundYourTeam";
import StickyQuoteCTA from "./components/StickyQuoteCTA/StickyQuoteCTA";
import Testimonials from "./components/Testimonials/Testimonials";

const CorporatePlans = () => {
  return (
    <>
      <PageContainer>
        <CPHero />
        <WhyChooseSection />
        <TailoredCorporatePlans />
        <HassleFreeExperience />
        <CorporateFormSection />
        <Testimonials />
        <BuiltAroundYourTeam />
      </PageContainer>
      {/* <StickyQuoteCTA /> */}
    </>
  );
};

export default CorporatePlans;
