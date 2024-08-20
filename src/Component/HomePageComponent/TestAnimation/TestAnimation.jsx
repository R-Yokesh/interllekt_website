import React, { useEffect } from 'react';
import './TestAnimation.css'; // Ensure the path is correct
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestAnimation = () => {
  useEffect(() => {
    gsap.utils.toArray('.scroll-reveal-text span').forEach((element) => {
      gsap.fromTo(element,
        { fontWeight: 'normal' },
        {
          fontWeight: 'bold',
          duration: 5.2, // Adjust duration for smoother transition
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1, // Use a specific scrub value for smoother animation
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // gsap.fromTo('.scroll-reveal-text .highlight',
    //   { fontWeight: 'normal' },
    //   {
    //     fontWeight: 'bold',
    //     duration: 5.1, // Adjust duration for smoother transition
    //     scrollTrigger: {
    //       trigger: '.scroll-reveal-text .highlight',
    //       start: 'top 80%',
    //       end: 'bottom 20%',
    //       scrub: 1, // Use a specific scrub value for smoother animation
    //       toggleActions: 'play none none reverse'
    //     }
    //   }
    // );
  }, []);

  return (
    <section className="scroll-reveal-text ">
      <h2 className="section-title-text">
        <span>"We are here <br></br>to design <br></br>your future"</span>
      </h2>
      <p className='txtn' >
        <span>
        “We look ahead and manifest the future, through design, technology, strategy, venture and an omni thinking. From a startup to a legacy enterprise, building challenging transformations online and offline.
        </span>
      </p>
    </section>
  );
}

export default TestAnimation;
