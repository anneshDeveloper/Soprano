import React, { Component, Fragment } from "react";
//component
import Workspaces from "../components/section/workspaces/Workspaces";
import Newsletter from "../components/section/newsletter/Newsletter";
import BusinessJourney from "../components/section/businessJourney/BusinessJourney";
import Demos from "../components/section/demos/Demos";
import OurProduct from "../components/section/ourProduct/OurProduct";
import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import ImageProcess from "../components/imageProcess/ImageProcess"

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Carousel />
        <Workspaces />
        <Demos />
        <BusinessJourney />
        <OurProduct />
        <ImageProcess />
        <Newsletter />
        <Footer />
      </Fragment>
    );
  }
}

export default Landing;
