import React, { useEffect, useRef } from 'react';
import './DesignFutureAnimation.css';

const DesignFutureAnimation = () => {
    const firstSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!firstSectionRef.current) return;

            const rect = firstSectionRef.current.getBoundingClientRect();
            const translateY = Math.max(0, rect.top);
            const scale = translateY / window.innerHeight; // Reverse scale calculation

            // Apply transform based on scroll position
            firstSectionRef.current.style.transform = `translate3d(0px, ${1 * (1 - scale)}vh, 0px) scale3d(${0.62014 + (1 - scale) * (1 - 0.62014)}, ${0.62014 + (1 - scale) * (1 - 0.62014)}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='scroll1s'>
            {/* First section */}
            <section
                ref={firstSectionRef}
                className="value-sections firstsval"
                style={{
                    willChange: 'transform',
                    transform: 'translate3d(0px, -42.7893vh, 0px) scale3d(0.62014, 0.62014, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="w-layout-blockcontainer container w-container">
                    <div className="value-wrap">
                        <div className="columns-wrap">
                            <div className="heading-left-wrap">
                                <h2
                                    data-w-id="58a9cce3-3923-f4b1-00f6-f045c41a9177"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="heading-1 fluor dark"
                                >
                                    We are here


                                </h2>
                                <h2
                                    data-w-id="573b7921-7302-0611-b910-3fac6e1febaf"
                                    style={{ color: 'rgb(0, 0, 0)', opacity: 1 }}
                                    className="heading-1"
                                >
                                    to design
                                    <br />
                                    your future.
                                </h2>
                            </div>
                            <div className="content-right-wrap">
                                <h2
                                    data-w-id="40895bc1-b774-f72c-1966-4e2e4d6622b8"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="heading-3 black"
                                >

                                </h2>

                                <div
                                    data-w-id="001f3d77-17b6-5433-c538-f199e7be4865"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="text-m black"
                                >
                                    We look ahead and manifest the future,
                                    through design, technology, strategy, venture
                                    and an omni thinking. From a startup to a
                                    legacy enterprise, building challenging
                                    transformations online and offline.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //secondescetoion */}
            {/* <section
                id="faq"
                className="expert-section"
                style={{ willChange: 'background', backgroundColor: 'rgb(232, 255, 179)' }}
            >
                <div className="w-layout-blockcontainer container w-container">
                    <div className="expert-wrap">
                        <div
                            data-w-id="36156d69-1417-9ba6-d487-b902a378f8aa"
                            style={{
                                opacity: 1,
                                transform: 'translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d',
                            }}
                            className="columns-wrap expert"
                        >
                            <div className="heading-left-wrap">
                                <h2 className="heading-1">Webflow template</h2>
                            </div>
                            <div className="content-right-wrap">
                                <h2 className="heading-3 black">A cutting-edge web development tool that changes the game.</h2>
                                <div className="text-m black">
                                    No plugins.
                                    <br />
                                    No updates.
                                    <br />
                                    No design limitations.
                                    <br />
                                    Uses the same servers as Amazon, ensuring security and performance are beyond question.
                                </div>
                            </div>
                        </div>
                        <div
                            data-w-id="b67387f6-6142-0c2a-dd66-7941dec9bf6e"
                            style={{
                                opacity: 1,
                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d',
                            }}
                            className="faq-wrap"
                        >
                            <div
                                data-hover="false"
                                data-delay="0"
                                data-w-id="d9ea8c86-a0e8-32bb-b218-4d62d5d236a1"
                                style={{ width: '100%', height: '95px' }}
                                className="faq w-dropdown"
                            >
                                <div
                                    className="faq-tittle w-dropdown-toggle"
                                    style={{ borderColor: 'rgb(197, 209, 162)' }}
                                    id="w-dropdown-toggle-0"
                                    aria-controls="w-dropdown-list-0"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex="0"
                                >
                                    <h3 className="heading-3 faq" style={{ width: '100%', height: '95px' }}>
                                        What is the difference?
                                    </h3>
                                    <div
                                        data-w-id="d9ea8c86-a0e8-32bb-b218-4d62d5d236a5"
                                        style={{
                                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                        className="plus-icon-black"
                                    >
                                        <div className="plus-line-vertical black"></div>
                                        <div className="plus-line-horizontal black"></div>
                                    </div>
                                </div>
                                <nav className="dropdown-list w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0">
                                    <div className="faq-content">
                                        <div className="text-m black">
                                            There will be no limitations in the design, which, combined with interactions and animations, creates an incredible experience for each of the visitors.
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div
                                data-hover="false"
                                data-delay="0"
                                data-w-id="7cfeb66c-5eed-d9f7-c047-68b7b2c0a952"
                                style={{ width: '100%', height: '95px' }}
                                className="faq w-dropdown"
                            >
                                <div
                                    className="faq-tittle w-dropdown-toggle"
                                    style={{ borderColor: 'rgb(197, 209, 162)' }}
                                    id="w-dropdown-toggle-1"
                                    aria-controls="w-dropdown-list-1"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex="0"
                                >
                                    <h3 className="heading-3 faq" style={{ width: '100%', height: '95px' }}>
                                        Is experience required to use the template?
                                    </h3>
                                    <div
                                        data-w-id="521691e1-dce7-6a98-78b8-63704ccd964a"
                                        style={{
                                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                        className="plus-icon-black"
                                    >
                                        <div className="plus-line-vertical black"></div>
                                        <div className="plus-line-horizontal black"></div>
                                    </div>
                                </div>
                                <nav className="dropdown-list w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1">
                                    <div className="faq-content">
                                        <div className="text-m black">With a basic understanding of Webflow, it can be easily edited and used.</div>
                                    </div>
                                </nav>
                            </div>
                            <div
                                data-hover="false"
                                data-delay="0"
                                data-w-id="b7cd4022-4810-dd9d-3a3d-327c8ab5befa"
                                style={{ width: '100%', height: '95px' }}
                                className="faq w-dropdown"
                            >
                                <div
                                    className="faq-tittle w-dropdown-toggle"
                                    style={{ borderColor: 'rgb(197, 209, 162)' }}
                                    id="w-dropdown-toggle-2"
                                    aria-controls="w-dropdown-list-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    role="button"
                                    tabIndex="0"
                                >
                                    <h3 className="heading-3 faq" style={{ width: '100%', height: '95px' }}>
                                        How long does a project take?
                                    </h3>
                                    <div
                                        data-w-id="b7cd4022-4810-dd9d-3a3d-327c8ab5befe"
                                        style={{
                                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                        className="plus-icon-black"
                                    >
                                        <div className="plus-line-vertical black"></div>
                                        <div className="plus-line-horizontal black"></div>
                                    </div>
                                </div>
                                <nav className="dropdown-list w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2">
                                    <div className="faq-content">
                                        <div className="text-m black">
                                            With this template, editing texts, colors, and images, you can have a website with a finish nominated by Awwwards in just 1 hour.
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default DesignFutureAnimation;
