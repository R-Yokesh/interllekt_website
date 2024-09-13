import React, { useEffect, useRef, useState } from 'react';
import "./AnimationBanner.css";
import AnimationVideo from '../AnimationVideo/AnimationVideo';

// const AnimationBanner = () => {
//   const overlineRef = useRef(null);
//   const megaHeadingRefs = useRef([]);
//   const videoRefs = useRef([]);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isAligned, setIsAligned] = useState(false);
//   const [initialSet, setInitialSet] = useState(false);
//   const [allowScroll, setAllowScroll] = useState(false); // To control scroll lock until the video starts

//   // Helper to disable scroll
//   const disableScroll = () => {
//     document.body.style.overflow = 'hidden';
//   };

//   // Helper to enable scroll
//   const enableScroll = () => {
//     document.body.style.overflow = 'auto';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!allowScroll) {
//         disableScroll(); // Lock scroll before video starts
//         return;
//       } else {
//         enableScroll(); // Enable scroll after video starts
//       }

//       const scrollY = window.scrollY;
//       const maxScroll = 6000; // Adjust this value for the number of scrolls needed for rotation

//       // Calculate the scroll progress based on the defined max scroll
//       const progress = Math.min(scrollY / maxScroll, 1);
//       setScrollProgress(progress);

//       // Determine when the rotation alignment is complete
//       if (progress >= 1) {
//         setIsAligned(true);
//       } else {
//         setIsAligned(false);
//       }

//       // Apply the rotation to the headings based on the scroll progress
//       const initialRotations = [0, 50, -30, 15];
//       megaHeadingRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const initialRotation = initialRotations[index];
//           const rotation = initialRotation * (1 - progress);

//           // Apply rotation only if the initial rotation has been set
//           if (initialSet) {
//             ref.style.transform = `rotateZ(${rotation}deg)`;
//             ref.style.transition = 'transform 0.3s ease';
//           }

//           // Fade out other mega headings after alignment (when aligned)
//           if (isAligned && index !== 0) {
//             ref.style.opacity = '0';
//             ref.style.transition = 'opacity 1s ease';
//           } else if (!isAligned) {
//             ref.style.opacity = '1';
//           }
//         }
//       });

//       // Hide target-circle elements after alignment
//       const targetCircleElements = document.querySelectorAll('.target-circle');
//       targetCircleElements.forEach((el) => {
//         el.style.opacity = isAligned ? '0' : '1';
//         el.style.transition = 'opacity 1s ease';
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Set initial rotation on component mount
//     if (!initialSet) {
//       megaHeadingRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const initialRotations = [0, 50, -30, 15];
//           ref.style.transform = `rotateZ(${initialRotations[index]}deg)`;
//         }
//       });

//       setTimeout(() => {
//         setInitialSet(true); // Enable scroll-based rotation after the initial set
//       }, 500);
//     }

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrollProgress, isAligned, allowScroll, initialSet]);

//   // Effect to detect when video starts and unlock scrolling
//   useEffect(() => {
//     const checkVideoVisibility = () => {
//       const videoElement = videoRefs.current[0]; // Reference to the first video

//       if (videoElement) {
//         const videoStyle = window.getComputedStyle(videoElement);
//         const videoOpacity = parseFloat(videoStyle.opacity);

//         // If the video becomes visible (opacity > 0), enable scrolling
//         if (videoOpacity > 0) {
//           setAllowScroll(true); // Unlock scrolling after video appears
//         }
//       }
//     };

//     // Periodically check video visibility after alignment
//     const videoCheckInterval = setInterval(checkVideoVisibility, 100);

//     return () => {
//       clearInterval(videoCheckInterval); // Clear interval on component unmount
//     };
//   }, [isAligned]);

//   return (
//     <div className="mono-track">
//       <div className="scroll-path target-puzzle">
//         <div className="scroll-frame sticky">
//           <div className="overline">
//             <div ref={overlineRef} className="overline-fill"></div>
//           </div>

//           {/* Mega Headings */}
//           <div className="mega-wrap">
//             <div className="mega-heading _1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
//               {/* Hidden initially, video will fade in */}
//               <div ref={(el) => (videoRefs.current[0] = el)} style={{ opacity: 0 }}>
//                 <AnimationVideo />
//               </div>
//             </div>
//           </div>

//           <div className="target-circle">
//             <div className="mega-wrap">
//               <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
//                 <AnimationVideo ref={(el) => (videoRefs.current[1] = el)} />
//               </div>
//             </div>
//             <div className="target-glare"></div>
//           </div>

//           <div className="target-circle md">
//             <div className="mega-wrap">
//               <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
//                 <AnimationVideo ref={(el) => (videoRefs.current[2] = el)} />
//               </div>
//             </div>
//             <div className="target-glare"></div>
//           </div>

//           <div className="target-circle sm">
//             <div className="mega-wrap">
//               <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}>
//                 <AnimationVideo ref={(el) => (videoRefs.current[3] = el)} />
//               </div>
//             </div>
//             <div className="target-glare"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const AnimationBanner = () => {
  const overlineRef = useRef(null);
  const megaHeadingRefs = useRef([]);
  const videoRefs = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAligned, setIsAligned] = useState(false);
  const [initialSet, setInitialSet] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video playing status
  const [isScrollLocked, setIsScrollLocked] = useState(false); // Lock scroll when video is playing

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollLocked) return; // Prevent scrolling if the video is playing

      const scrollY = window.scrollY;
      const maxScroll = 2000; // Adjust based on when the headings should align

      // Update scroll progress as a percentage
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);

      // Check if alignment is complete
      if (progress >= 1) {
        setIsAligned(true);
      } else {
        setIsAligned(false);
      }

      // Rotate headings based on scroll
      const initialRotations = [0, 50, -30, 15];
      megaHeadingRefs.current.forEach((ref, index) => {
        if (ref) {
          const initialRotation = initialRotations[index];
          const rotation = initialRotation * (1 - progress);

          if (initialSet) {
            ref.style.transform = `rotateZ(${rotation}deg)`;
            ref.style.transition = 'transform 0.3s ease';
          }

          // Fade out other mega headings after alignment
          if (isAligned && index !== 0) {
            ref.style.opacity = "0";
            ref.style.transition = "opacity 1s ease";
          } else if (!isAligned) {
            ref.style.opacity = "1";
          }
        }
      });

      // Fade out target-circle elements after alignment
      const targetCircleElements = document.querySelectorAll('.target-circle');
      targetCircleElements.forEach((el) => {
        el.style.opacity = isAligned ? '0' : '1';
        el.style.transition = 'opacity 1s ease';
      });

      // Control video visibility after alignment
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          if (isAligned && index === 0) {
            videoRef.style.opacity = 1;
            videoRef.style.transition = "opacity 1.5s ease";
            // videoRef.play(); // Play video once aligned
            setIsVideoPlaying(true);
          } else {
            videoRef.style.opacity = 0;
          }
        }
      });
    };

    const handleVideoEnd = () => {
      setIsVideoPlaying(false); // Unlock scrolling when the video ends
      setIsScrollLocked(false);
    };

    // Lock scroll while the video is playing
    const lockScroll = (e) => {
      if (isScrollLocked) {
        e.preventDefault(); // Prevent default scroll behavior
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", lockScroll);

    // Set initial rotation on component mount
    if (!initialSet) {
      megaHeadingRefs.current.forEach((ref, index) => {
        if (ref) {
          const initialRotations = [0, 50, -30, 15];
          ref.style.transform = `rotateZ(${initialRotations[index]}deg)`;
        }
      });

      setTimeout(() => {
        setInitialSet(true); // Enable scroll-based rotation after the initial set
      }, 500);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", lockScroll);
    };
  }, [scrollProgress, isAligned, isScrollLocked]);

  return (
    <div className="mono-track">
      <div className="scroll-path target-puzzle">
        <div className="scroll-frame sticky">
          <div className="overline">
            <div ref={overlineRef} className="overline-fill"></div>
          </div>

          {/* Mega Headings */}
          <div className="mega-wrap">
            <div className="_1" ref={(el) => (megaHeadingRefs.current[0] = el)}>
              {/* Hidden initially, video will fade in */}
              <div ref={(el) => (videoRefs.current[0] = el)} style={{ opacity: 0 }}>
                <AnimationVideo />
              </div>
            </div>
          </div>

          <div className="target-circle">
            <div className="mega-wrap">
              <div className="mega-heading _2" ref={(el) => (megaHeadingRefs.current[1] = el)}>
                <AnimationVideo ref={(el) => (videoRefs.current[1] = el)} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle md">
            <div className="mega-wrap">
              <div className="mega-heading _3" ref={(el) => (megaHeadingRefs.current[2] = el)}>
                <AnimationVideo ref={(el) => (videoRefs.current[2] = el)} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>

          <div className="target-circle sm">
            <div className="mega-wrap">
              <div className="mega-heading _4" ref={(el) => (megaHeadingRefs.current[3] = el)}>
                <AnimationVideo ref={(el) => (videoRefs.current[3] = el)} />
              </div>
            </div>
            <div className="target-glare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBanner;