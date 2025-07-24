import React, { useEffect, useRef, useState } from "react";
import "./FrameMotion.css";
import handSupport from "../Video/handSupport.mp4";
import sampleImage from "../Images/chairFour.jpg";
import rolling from "../Video/rolling off camera right_1.mp4";

const importAll = (r) => r.keys().map(r);
const allFrames = importAll(
  require.context("../FileImg/all_frames", false, /\.(png)$/)
);

const images = [
  "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
  "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
];

const FrameMotion = () => {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const totalFrames = allFrames.length;

  const [frameIndex, setFrameIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollTop = scrollElement.scrollTop;
    const scrollHeight =
      scrollElement.scrollHeight - scrollElement.clientHeight;

    const scrollPercent = scrollTop / scrollHeight;
    const index = Math.min(
      totalFrames - 1,
      Math.floor(scrollPercent * totalFrames)
    );

    setFrameIndex(index);
  };

  useEffect(() => {
    if (showOverlay && scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [showOverlay]);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          entry.isIntersecting ? video.play() : video.pause();
        }
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = mouseX / rect.width;
    const percentY = mouseY / rect.height;

    const maxOffsetY = rect.height * 0.25;
    const maxOffsetX = rect.width * 0.25;

    const offsetY = (percentY - 0.5) * -2 * maxOffsetY;
    const offsetX = (percentX - 0.5) * -2 * maxOffsetX;

    setTranslateY(offsetY);
    setTranslateX(offsetX);
  };

  return (
    <div>
      {/* Image sections */}
      <div>
        {[1, 2].map((section) => (
          <div
            key={section}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "40px",
              flexWrap: "wrap",
            }}
          >
            {images.map((item, idx) => (
              <div className="card-container" key={`${section}-${idx}`}>
                <img
                  src={item}
                  alt={`item-${idx}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Video section */}
      <div
        className="videoDivOne"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          ref={videoRef}
          src={rolling}
          controls
          muted
          onClick={() => setShowOverlay(true)}
          style={{
            width: "100vw",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "#000",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Overlay with scrollable frame images */}
      {/* Overlay with scrollable frame images */}
      {showOverlay && (
        <div
          onClick={() => setShowOverlay(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            ref={scrollRef}
            style={{
              height: "80vh",
              overflowY: "scroll",
              scrollBehavior: "smooth", // 💡 this enables smooth scrolling
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              position: "relative",
              background: "#000",
              borderRadius: "20px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allFrames[frameIndex]}
              alt={`frame_${frameIndex}`}
              style={{
                position: "sticky",
                top: 0,
                width: "100%",
                height: "90vh",
                objectFit: "cover",
                zIndex: 1,
                pointerEvents: "none",
                background: "#000",
              }}
            />

            {/* Spacer */}
            <div style={{ height: `${totalFrames * 10}px` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameMotion;





// import React, { useRef, useState, useEffect } from "react";


// // Import all images dynamically
// const importAll = (r) => r.keys().map(r);
// const frames = importAll(
//   require.context("../FileImg/all_frames", false, /\.(png)$/)
// );

// const FrameMotion = () => {
//   const scrollRef = useRef(null);
//   const [frameIndex, setFrameIndex] = useState(0);
//   const totalFrames = frames.length;

//   const handleScroll = () => {
//     const scrollElement = scrollRef.current;
//     const scrollTop = scrollElement.scrollTop;
//     const scrollHeight =
//       scrollElement.scrollHeight - scrollElement.clientHeight;

//     const scrollPercent = scrollTop / scrollHeight;
//     const index = Math.min(
//       totalFrames - 1,
//       Math.floor(scrollPercent * totalFrames)
//     );

//     setFrameIndex(index);
//   };

//   useEffect(() => {
//     const scrollElement = scrollRef.current;
//     scrollElement.addEventListener("scroll", handleScroll);

//     return () => {
//       scrollElement.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div 
//       ref={scrollRef}
//       style={{
//         height: "80vh",
//         overflowY: "scroll",
//         border: "2px solid #ccc",
//         width: "100%",
//         maxWidth: "800px",
//         margin: "0 auto",
//         position: "relative", // make sticky child work
//         background: "#000",
//         borderRadius:"20px",
//         border:"none"
//       }}
//     >
//       {/* Sticky image shown at top */}
//       <img
//         src={frames[frameIndex]}
//         alt={`frame_${frameIndex}`}
//         style={{
//           position: "sticky",
//           top: 0,
//           width: "100%",
//           maxWidth: "800px",
//           height: "90vh",
//           objectFit: "cover",
//           zIndex: 1,
//           pointerEvents: "none",
//           background: "#000",
//         }}
//       />

//       {/* Spacer to enable scroll */}
//       <div style={{ height: `${totalFrames * 10}px` }}></div>
//     </div>
//   );
// };

// export default FrameMotion;




// import React, { useEffect, useRef, useState } from "react";
// import "./FrameMotion.css";
// import handSupport from "../Video/handSupport.mp4";
// import sampleImage from "../Images/chairFour.jpg";

// const images = [
//   "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
//   "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
//   "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
//   "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg"
// ];

// const FrameMotion = () => {
//   const videoRef = useRef(null);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [translateY, setTranslateY] = useState(0);
//   const [translateX, setTranslateX] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (showOverlay) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showOverlay]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const video = videoRef.current;
//         if (video) {
//           if (entry.isIntersecting) {
//             video.play();
//           } else {
//             video.pause();
//           }
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   const handleMouseMove = (e) => {
//     const container = e.currentTarget;
//     const rect = container.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;

//     const percentX = mouseX / rect.width;
//     const percentY = mouseY / rect.height;

//     const maxOffsetY = rect.height * 0.25;
//     const maxOffsetX = rect.width * 0.25;

//     const offsetY = (percentY - 0.5) * -2 * maxOffsetY;
//     const offsetX = (percentX - 0.5) * -2 * maxOffsetX;

//     setTranslateY(offsetY);
//     setTranslateX(offsetX);
//   };

//   return (
//     <div>
//       {/* ✅ Original image layout */}
//       <div>
//         {[1, 2].map((section) => (
//           <div
//             key={section}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "20px",
//               padding: "40px",
//               flexWrap: "wrap"
//             }}
//           >
//             {images.map((item, idx) => (
//               <div className="card-container" key={`${section}-${idx}`}>
//                 <img
//                   src={item}
//                   alt={`item-${idx}`}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain"
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* ✅ Video section */}
//      <div
//   className="videoDivOne"
//   style={{
//     width: "100vw",
//     // margin: 0,
//     marginTop: "20px",
//     backgroundColor: "#f8f9fa",
//   }}
// >
//   <video
//     ref={videoRef}
//     src={handSupport}
//     controls
//     muted
//     onClick={() => setShowOverlay(true)}
//     style={{
//       width: "100%",
//       height: "710px", 
//       objectFit: "cover", 
//       cursor: "pointer",
//     }}
//   />
// </div>


//       {/* ✅ Overlay for zoomable/pannable image */}
//       {showOverlay && (
//         <div
//           onClick={() => setShowOverlay(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(128, 128, 128, 0.75)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           {/* ✅ Image container */}
//           <div
//             onClick={(e) => e.stopPropagation()}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => {
//               setIsHovered(false);
//               setTranslateY(0);
//               setTranslateX(0);
//             }}
//             onMouseMove={handleMouseMove}
//             style={{
//               backgroundColor: "#fff",
//               borderRadius: "12px",
//             //   border: "2px solid red",
//               maxWidth: "45%",
//               maxHeight: "70vh",
//               overflow: "hidden",
//               position: "relative",
//               width: "80vw",
//               height: "60vh",
//               cursor: isHovered ? "zoom-in" : "default"
//             }}
//           >
//             <img
//               src={sampleImage}
//               alt="Popup"
//               style={{
//                 position: isHovered ? "absolute" : "relative",
//                 top: isHovered ? "50%" : "0",
//                 left: isHovered ? "50%" : "0",
//                 transform: isHovered
//                   ? `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`
//                   : "none",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 minHeight: isHovered ? "200%" : "100%",
//                 transition: "transform 0.1s ease-out",
//                 pointerEvents: "none"
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FrameMotion;










// import React, { useEffect, useRef, useState } from "react";
// import "./FrameMotion.css";
// import handSupport from "../Video/handSupport.mp4";




// // Dummy 10-frame array — replace with your actual 265 images
// const frames = Array.from({ length: 265 }, (_, i) => `path_to_frames/frame_${i}.png`);

// const FrameMotion = () => {
//   const videoRef = useRef(null);
//   const scrollRef = useRef(null);

//   const [showOverlay, setShowOverlay] = useState(false);
//   const [frameIndex, setFrameIndex] = useState(0);
//   const totalFrames = frames.length;

//   useEffect(() => {
//     if (showOverlay) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showOverlay]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const video = videoRef.current;
//         if (video) {
//           if (entry.isIntersecting) {
//             video.play();
//           } else {
//             video.pause();
//           }
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (videoRef.current) observer.observe(videoRef.current);
//     return () => {
//       if (videoRef.current) observer.unobserve(videoRef.current);
//     };
//   }, []);

//   // 🔁 Scroll-based frame logic
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const scrollTop = scrollRef.current.scrollTop;
//         const scrollHeight =
//           scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         const scrollFraction = scrollTop / scrollHeight;
//         const newIndex = Math.min(
//           totalFrames - 1,
//           Math.floor(scrollFraction * totalFrames)
//         );
//         setFrameIndex(newIndex);
//       }
//     };

//     const ref = scrollRef.current;
//     if (ref) ref.addEventListener("scroll", handleScroll);
//     return () => {
//       if (ref) ref.removeEventListener("scroll", handleScroll);
//     };
//   }, [totalFrames]);

//   return (
//     <div>
//       {/* ✅ Video Section */}
//       <div
//         className="videoDivOne"
//         style={{
//           width: "100vw",
//           marginTop: "20px",
//           backgroundColor: "#f8f9fa",
//         }}
//       >
//         <video
//           ref={videoRef}
//           src={handSupport}
//           controls
//           muted
//           onClick={() => setShowOverlay(true)}
//           style={{
//             width: "100%",
//             height: "710px",
//             objectFit: "cover",
//             cursor: "pointer",
//           }}
//         />
//       </div>

//       {/* ✅ Overlay: Scroll to view image frames */}
//       {showOverlay && (
//         <div
//           onClick={() => setShowOverlay(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0, 0, 0, 0.75)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             ref={scrollRef}
//             style={{
//               height: "80vh",
//               overflowY: "scroll",
//               border: "2px solid #ccc",
//               width: "100%",
//               maxWidth: "800px",
//               margin: "0 auto",
//               position: "relative",
//               background: "#000",
//               borderRadius: "20px",
//               border: "none",
//             }}
//           >
//             {/* Sticky image shown at top */}
//             <img
//               src={frames[frameIndex]}
//               alt={`frame_${frameIndex}`}
//               style={{
//                 position: "sticky",
//                 top: 0,
//                 width: "100%",
//                 maxWidth: "800px",
//                 height: "90vh",
//                 objectFit: "cover",
//                 zIndex: 1,
//                 pointerEvents: "none",
//                 background: "#000",
//               }}
//             />

//             {/* Spacer to enable scroll */}
//             <div style={{ height: `${totalFrames * 10}px` }}></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FrameMotion;
