import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}
const Technologies = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           pushLeft,
                           ...props
                       }) => {

    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Technologies',
        paragraph: "Our engineers can adapt themselves to any tech stack required. Here are some of the technologies we love!"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/ReactIcon.svg')}
                                            alt="Features tile icon 01"
                                            width={164}
                                            height={164} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        React & React Native
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake web application development projects in variety of tech stacks including Django, Flask, FastAPI, Express, Fastify, NodeJS, Gin, etc. to deliver highly reliable and scalable products.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/DjangoIcon.svg')}
                                            alt="Features tile icon 02"
                                            width={164}
                                            height={164} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Django
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake frontend development projects in variety of tech stacks including React.js, Vue.js, Tailwind, Nuxt.js, HTML, CSS, Bootstrap, etc. to deliver seamless and highly responsive user interfaces.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/VueIcon.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Vue.js
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/NodeIcon.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Node.js
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/AngularIcon.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Angular.js
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/HTMLCSS.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        HTML, CSS, and JavaScript
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/MySQL.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        MySQL
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/AndroidIcon.svg')}
                                            alt="Features tile icon 03"
                                            width={164}
                                            height={164} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        Android
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div className="mb-16">
                                        <Image
                                            src={require('./../../assets/images/MongoDB.svg')}
                                            alt="Features tile icon 03"
                                            width={128}
                                            height={128} />
                                    </div>
                                </div>
                                <div className="features-tiles-item-content">
                                    <h4 className="mt-0 mb-8">
                                        MongoDB
                                    </h4>
                                    {/*<p className="m-0 text-sm">*/}
                                    {/*    We undertake mobile app development projects in variety of tech stacks including React Native, Flutter, Android Native, iOS Native, Electron, Cordova, etc. to deliver highly performant and exquisite applications.*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Technologies.propTypes = propTypes;
Technologies.defaultProps = defaultProps;

export default Technologies;
