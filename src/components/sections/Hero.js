import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'testimonial hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
      'tiles-wrap',
      'pb-32'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Your Direction <span className="text-color-primary">Our Code</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Our goal is to help you and your team deliver a great product. That’s why working with us feels significantly different from what you might have experienced with external teams. We feel like your developers, just working remotely today.
                </p>
              {/*<div className="reveal-from-bottom" data-reveal-delay="600">*/}
              {/*  <ButtonGroup>*/}
              {/*    <Button tag="a" color="primary" wideMobile href="https://cruip.com/">*/}
              {/*      Get started*/}
              {/*      </Button>*/}
              {/*    <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">*/}
              {/*      View on Github*/}
              {/*      </Button>*/}
              {/*  </ButtonGroup>*/}
              {/*</div>*/}
            </div>
          </div>
          {/*<div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">*/}
          {/*  <a*/}
          {/*    data-video="https://player.vimeo.com/video/174002812"*/}
          {/*    href="#0"*/}
          {/*    aria-controls="video-modal"*/}
          {/*    onClick={openModal}*/}
          {/*  >*/}
          {/*    <Image*/}
          {/*      className="has-shadow"*/}
          {/*      src={require('./../../assets/images/video-placeholder.jpg')}*/}
          {/*      alt="Hero"*/}
          {/*      width={896}*/}
          {/*      height={504} />*/}
          {/*  </a>*/}
          {/*</div>*/}
          {/*<Modal*/}
          {/*  id="video-modal"*/}
          {/*  show={videoModalActive}*/}
          {/*  handleClose={closeModal}*/}
          {/*  video="https://player.vimeo.com/video/174002812"*/}
          {/*  videoTag="iframe" />*/}
        </div>
      </div>
      <div className={tilesClasses}>

        <div className="tiles-item reveal-from-right mb-32 pb-32" data-reveal-delay="200">
          <div className="tiles-item-inner">
            <div className="">
              <h3 className="mt-0 mb-8">
                Design
              </h3>
              <p className="text-sm mb-0">
                We design applications that are easy to use, fluid, and
                interactive.
              </p>
            </div>
            {/*<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">*/}
            {/*  <span className="testimonial-item-name text-color-high">Nile Pingbuds Inc</span>*/}
            {/*  /!*<span className="text-color-low"> / </span>*!/*/}
            {/*  /!*<span className="testimonial-item-link">*!/*/}
            {/*  /!*  <a href="#0">AppName</a>*!/*/}
            {/*  /!*</span>*!/*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom mb-32 pb-32">
          <div className="tiles-item-inner">
            <div className="">
              <h3 className="mt-0 mb-8">
                Develop
              </h3>
              <p className="text-sm mb-0">
                We develop industry standard mobile and web applications that are not only robust but also
                provide readable and scalable code.
              </p>
            </div>
            {/*<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">*/}
            {/*  <span className="testimonial-item-name text-color-high">Fleek</span>*/}
            {/*  /!*<span className="text-color-low"> / </span>*!/*/}
            {/*  /!*<span className="testimonial-item-link">*!/*/}
            {/*  /!*  <a href="#0">AppName</a>*!/*/}
            {/*  /!*</span>*!/*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="tiles-item reveal-from-left mb-32 pb-32" data-reveal-delay="200">
          <div className="tiles-item-inner">
            <div className="">
              <h3 className="mt-0 mb-8">
                Deploy
              </h3>
              <p className="text-sm mb-0">
                We do timely deployment of solutions with little client involvement and strive to meet the agreed-upon deadline.
              </p>
            </div>
            {/*<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">*/}
            {/*  <span className="testimonial-item-name text-color-high">Kronosun Data Solutions</span>*/}
            {/*  /!*<span className="text-color-low"> / </span>*!/*/}
            {/*  /!*<span className="testimonial-item-link">*!/*/}
            {/*  /!*  <a href="#0">AppName</a>*!/*/}
            {/*  /!*</span>*!/*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
