// import React from "react";


// const images = [
//     "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
//     "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
//     "https://www.pngkey.com/png/detail/80-808253_strongback-premium-lightweight-portable-wheelchair-wheel.png",
//     "https://www.pngkey.com/png/detail/80-808430_patented-axial-technology-motorized-wheelchair.png"
//   ];

// const Demo =()=>{


//     return (
//         <div>
//             <div>
//                 {
//                     images.map((item,idx)=>{
//                         <img src={item} alt="item-${idx}"/>
//                     })
//                 }
//             </div>
//             <div></div>
//         </div>
//     )
// }


// export default Demo;

import React, { useEffect, useRef, useState } from "react";
import "./DemoPage.css";
import handSupport from "../Video/handSupport.mp4";
import sampleImage from "../Images/chairFour.jpg";

const images = [
  "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg",
  "https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do=",
  "https://elderliving.in/wp-content/uploads/2022/02/Buy-Arcatron-Foldable-Lightweight-Manual-Wheelchair-FSS100-Online-in-Pune-Mumbai-India-ElderLiving-600x600.jpeg"
];

const Demo = () => {
  const videoRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
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
      {/* ✅ Original image layout */}
      <div>
        {[1, 2].map((section) => (
          <div
            key={section}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "40px",
              flexWrap: "wrap"
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
                    objectFit: "contain"
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ✅ Video section */}
     <div
  className="videoDivOne"
  style={{
    width: "100vw",
    // margin: 0,
    marginTop: "20px",
    backgroundColor: "#f8f9fa",
  }}
>
  <video
    ref={videoRef}
    src={handSupport}
    controls
    muted
    onClick={() => setShowOverlay(true)}
    style={{
      width: "100%",
      height: "700px", 
      objectFit: "cover", 
      cursor: "pointer",
    }}
  />
</div>


      {/* ✅ Overlay for zoomable/pannable image */}
      {showOverlay && (
        <div
          onClick={() => setShowOverlay(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(128, 128, 128, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          {/* ✅ Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setTranslateY(0);
              setTranslateX(0);
            }}
            onMouseMove={handleMouseMove}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
            //   border: "2px solid red",
              maxWidth: "45%",
              maxHeight: "70vh",
              overflow: "hidden",
              position: "relative",
              width: "80vw",
              height: "60vh",
              cursor: isHovered ? "zoom-in" : "default"
            }}
          >
            <img
              src={sampleImage}
              alt="Popup"
              style={{
                position: isHovered ? "absolute" : "relative",
                top: isHovered ? "50%" : "0",
                left: isHovered ? "50%" : "0",
                transform: isHovered
                  ? `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px))`
                  : "none",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                minHeight: isHovered ? "200%" : "100%",
                transition: "transform 0.1s ease-out",
                pointerEvents: "none"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
