import React, { useEffect, useRef, useState } from 'react';
import './AnimationBanner.css';
import AnimationVideo from '../AnimationVideo/AnimationVideo';

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);
  const [playVideo, setPlayVideo] = useState(false);
  const [circleToSquare, setCircleToSquare] = useState(false);
  const [allCirclesAligned, setAllCirclesAligned] = useState(false);
  const [circlesHidden, setCirclesHidden] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down'); // Track scroll direction
  const bannerRef = useRef(null);
  let lastScrollY = window.scrollY; // Initial scroll position
  const [isMobile,setIsmobile]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollY;
      setScrollDirection(isScrollingDown ? 'down' : 'up');
      lastScrollY = scrollY;

      if (bannerRef.current) {
        const bannerPosition = bannerRef.current.getBoundingClientRect();

        if (bannerPosition.top < window.innerHeight && bannerPosition.bottom > 0) {
          if (overlineRef.current) {
            const maxOverlineRotation = -36.032;
            const overlineRotation = Math.max(0 - scrollY * 0.02, maxOverlineRotation);
            overlineRef.current.style.transform = `translate3d(0px, ${99.372 + Math.min(scrollY, 508) * 0.05}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${overlineRotation}deg) skew(0deg, 0deg)`;
          }

          const rotations = [0.0036, -0.00288, 0.00288, -0.0036];
          megaHeadingRefs.current.forEach((ref, index) => {
            if (ref) {
              let rotation;
              switch (index) {
                case 0:
                  rotation = 18.6462 - scrollY * 0.02;
                  rotation = Math.max(rotations[index], rotation);
                  break;
                case 1:
                  rotation = -14.917 + scrollY * 0.016;
                  rotation = Math.min(rotations[index], rotation);
                  break;
                case 2:
                  rotation = 14.917 - scrollY * 0.016;
                  rotation = Math.max(rotations[index], rotation);
                  break;
                case 3:
                  rotation = -18.6462 + scrollY * 0.02;
                  rotation = Math.min(rotations[index], rotation);
                  break;
                default:
                  rotation = 0;
              }
              ref.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotation}deg) skew(0deg, 0deg)`;
            }
          });

          if (scrollY > 500) {
            setCircleToSquare(true);
          } else if (scrollDirection === 'up') {
            setCircleToSquare(false);
          }

          if (scrollY > 1000) {
            setAllCirclesAligned(true);
            setCirclesHidden(true);
          } else if (scrollDirection === 'up') {
            setAllCirclesAligned(false);
            setCirclesHidden(false);
          }

          if (scrollY <= 500) {
            setPlayVideo(false);
          }

          if (allCirclesAligned && !playVideo && scrollDirection === 'down') {
            setPlayVideo(true);
          }

          if (scrollDirection === 'up' && scrollY < 1000) {
            setPlayVideo(false); // Pause or reset video when scrolling up
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [playVideo, circleToSquare, allCirclesAligned, scrollDirection]);

  const handlePause = (event) => {
    setCurrentTime(event.target.currentTime);
  };

  function checkScreenSize() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 425) {
      console.log("This is a mobile or tablet screen.");
      setIsmobile(true)
    } else if (screenWidth > 768 && screenWidth <= 1024) {
      console.log("This is a laptop or small desktop screen.");
      setIsmobile(false);
    } else {
      console.log("This is a large desktop screen.");
      setIsmobile(false);
    }
  }
  
  useEffect(()=>{
          // Call the function on load or resize
  checkScreenSize();
  
  window.addEventListener('resize', checkScreenSize);
  },[])



  return (
    <div className="mono-track" ref={bannerRef}>
      <div className="scroll-path target-puzzle">
        {isMobile ?
      <div className="">
      <AnimationVideo play={true} currentTime={currentTime} />
      </div> :
         <div className="scroll-frame sticky">
          <div className="overline">
            <div ref={overlineRef} className="overline-fill"></div>
          </div>

          <div className="mega-wrap">
            <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
              {allCirclesAligned && <AnimationVideo play={playVideo} currentTime={currentTime} />}
            </div>
          </div>

          <div className={`target-circle ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle md ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle sm ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className={`target-circle xs ${circleToSquare ? 'square' : ''} ${circlesHidden ? 'hidden' : ''}`}>
            <div className="mega-wrap">
              <div className="mega-heading _5" ref={(el) => (megaHeadingRefs.current[4] = el)}>
                <AnimationVideo play={playVideo} currentTime={currentTime} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>
        </div> 
      }
      </div>
    </div>
  );
};

export default AnimationBanner;
