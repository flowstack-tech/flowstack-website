import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Clients from "../components/sections/Clients";
import Technologies from "../components/sections/Technologies";

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles topDivider/>
      {/*<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />*/}
      <Technologies topDivider/>
      <Testimonial topDivider/>
      <Clients topDivider/>
      <Cta split />
    </>
  );
}

export default Home;
