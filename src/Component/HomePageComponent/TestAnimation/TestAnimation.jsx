import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TestAnimation.css'; 

gsap.registerPlugin(ScrollTrigger);

const TestAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const targets = textRef.current.querySelectorAll('span');

    targets.forEach(target => {
      gsap.to(target, {
        backgroundSize: '100% 100%',
        color: '#000', // black
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          markers: true,
          scrub: 0.5,
          start: 'top center',
          end: 'bottom center',
        },
      });
    });

    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
      targets.forEach(target => {
        gsap.to(target, {
          backgroundSize: '100% 100%',
          color: '#000', // black
          ease: 'none',
          scrollTrigger: {
            trigger: target,
            markers: true,
            scrub: 0.5,
            start: 'top center',
            end: 'bottom center',
          },
        });
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <section className="scroll-reveal-text" ref={textRef}>
      <h2 className="section-title-text">
        <span>"We are here <br/>to design <br/><span className="highlight">your future</span>"</span>
      </h2>
      <p>
        <span>
          “We look ahead and manifest the future, through design, technology, strategy, venture and an omni thinking. From a startup to a legacy enterprise, building challenging transformations online and offline."
        </span>
      </p>
    </section>
  );
}

export default TestAnimation;
