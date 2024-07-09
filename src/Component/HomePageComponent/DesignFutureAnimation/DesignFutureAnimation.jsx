import React, { useEffect, useRef, useState } from 'react';
import './DesignFutureAnimation.css'; // Make sure to import your CSS

const DesignFutureAnimation = () => {
    const firstSectionRef = useRef(null);
    const [openItems, setOpenItems] = useState([false, false, false]); // State to track open/close status of FAQ items

    const [openIndex, setOpenIndex] = useState(null);
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
    // const [openIndex, setOpenIndex] = useState(null); // State to track the open FAQ item

    const toggleItem = (index) => {
        if (openIndex === index) {
            // Clicking on the open FAQ item again should close it
            setOpenIndex(null);
        } else {
            setOpenIndex(index); // Open the clicked FAQ item
        }
    };



    return (
        <div className='wholbghs'>
            <section
                data-w-id="4e104f86-a9a9-43ab-cf7d-c7af3646bcd6"
                className="value-section"
                style={{
                    willChange: 'transform',
                    transform: 'translate3d(0px, -42.7893vh, 0px) scale3d(0.62014, 0.62014, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                }}
                ref={firstSectionRef}
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
                                <h2 data-w-id="573b7921-7302-0611-b910-3fac6e1febaf" style={{ color: 'rgb(0, 0, 0)', opacity: 1 }} className="heading-1">
                                 
                                   
                                    to design your future
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
                                  “We look ahead and manifest the future, 
through design, technology, strategy, venture 
and an omni thinking. From a startup to a 
legacy enterprise, building challenging 
transformations online and offline
                                </h2>
                                {/* <div
                                    data-w-id="e818578c-b7cc-20e4-6088-8ddbe3d2cf18"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="button"
                                >
                                    <a
                                        data-w-id="6009c327-47f3-92d7-f266-b757d94bf222"
                                        href="https://www.awwwards.com/sites/whoisjoa-r"
                                        target="_blank"
                                        className="link-block w-inline-block"
                                    ></a>
                                    <div className="button-text">AWWWARDS NOMINEE</div>
                                    <img
                                        src="https://assets-global.website-files.com/663563299b5a03e366e61b20/663563299b5a03e366e61b26_arrow.svg"
                                        loading="lazy"
                                        alt=""
                                        className="button-arrow"
                                    />
                                </div> */}
                                {/* <div
                                    data-w-id="001f3d77-17b6-5433-c538-f199e7be4865"
                                    style={{
                                        opacity: 1,
                                        transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                    className="text-m black"
                                >
                                    Structuring content and creating a visual environment so that none of your visitors leave without the information you want to convey. A design product with smooth animations and good copywriting.
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="faq"
                className="expert-section"
                style={{ willChange: 'background', }}
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
                                <h2 className="heading-1">CAPABILITIES</h2>
                            </div>
                            <div className="content-right-wrap">
                                <h2 className="heading-3 black">A cutting-edge web development tool that changes the game.</h2>
                                <div className="text-m black">
                                Concept & Design
                                    <br />
                                    Innovation
                                    <br />
                                    Business
                                    <br />
                                  
                                </div>
                            </div>
                        </div>
                        <div className="faq-wrap">
                            {[
                                {
                                    question: 'What is the difference?',
                                    answer:
                                        'There will be no limitations in the design, which, combined with interactions and animations, creates an incredible experience for each of the visitors.',
                                },
                                {
                                    question: 'Is experience required to use the template?',
                                    answer:
                                        'With a basic understanding of Webflow, it can be easily edited and used.',
                                },
                                {
                                    question: 'How long does a project take?',
                                    answer:
                                        'With this template, editing texts, colors, and images, you can have a website with a finish nominated by Awwwards in just 1 hour.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="faq w-dropdown"
                                    data-hover="false"
                                    data-delay="0"
                                    data-w-id={`faq-item-${index}`}
                                    style={{ width: '100%', height: openIndex === index ? 'auto' : '95px' }}
                                >
                                    <div
                                        className="faq-tittle w-dropdown-toggle"
                                        style={{ borderColor: 'rgb(197, 209, 162)' }}
                                        onClick={() => toggleItem(index)}
                                        role="button"
                                        tabIndex={0}
                                        aria-controls={`faq-item-${index}-list`}
                                        aria-haspopup="true"
                                        aria-expanded={openIndex === index ? 'true' : 'false'}
                                    >
                                        <h3 className="heading-3 faq">{item.question}</h3>
                                        <div className={`plus-icon-black ${openIndex === index ? 'open' : ''}`}>
                                            <div className="plus-line-vertical black"></div>
                                            <div className="plus-line-horizontal black"></div>
                                        </div>
                                    </div>
                                    <nav
                                        className={`dropdown-list w-dropdown-list ${openIndex === index ? 'open' : ''}`}
                                        id={`faq-item-${index}-list`}
                                        aria-labelledby={`faq-item-${index}`}
                                    >
                                        <div className="faq-content">
                                            <div className="text-m black">{item.answer}</div>
                                        </div>
                                    </nav>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* Add other sections as needed */}
        </div>
    );
};

export default DesignFutureAnimation;
