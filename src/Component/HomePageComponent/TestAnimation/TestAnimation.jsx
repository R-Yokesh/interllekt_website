import React, { useEffect } from 'react';
import './TestAnimation.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestAnimation = () => {
  useEffect(() => {
    gsap.utils.toArray('.scroll-reveal-text span').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0.2, fontWeight: 'normal' }, // Set initial opacity for visibility
        {
          opacity: 1,
          fontWeight: 'bold',
          duration: 5.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="scroll-reveal-text">
      <h2 className="section-title-text">
        <span>"We are here <br />to design <br />your future"</span>
      </h2>
      <p className='txtn'>
        <span>
          “We look ahead and manifest the future, through design, technology, strategy, venture, and an omni-thinking approach. From a startup to a legacy enterprise, building challenging transformations online and offline.”
        </span>
      </p>
    </section>
  );
}

export default TestAnimation;
