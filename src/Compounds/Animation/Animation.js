import React, { useRef } from "react";

const Animation = () => {
  const imgRef = useRef();

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Reverse both directions (tune 0.2 for smoother control)
    const moveX = -offsetX * 0.1;
    const moveY = -offsetY * 0.1;

    if (imgRef.current) {
      imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "400px",
        height: "400px",
        overflow: "hidden",
        border: "2px solid #ddd",
        margin: "50px auto",
        position: "relative",
        background: "#f4f4f4",
        cursor: "pointer",
      }}
    >
      <img
        ref={imgRef}
        src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
        alt="Toy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.2s ease-out",
        }}
      />
    </div>
  );
};

export default Animation;




// import React, { useRef } from "react";
// // import './style.css'; 

// const Animation = () => {
//   const imgRef = useRef();

//   const handleMouseMove = (e) => {
//     const container = e.currentTarget;
//     const rect = container.getBoundingClientRect();

//     // Mouse Y relative to container center
//     const offsetY = e.clientY - rect.top - rect.height / 2;

//     // Reverse the direction
//     const moveY = -offsetY * 0.2; // Adjust multiplier to control movement

//     if (imgRef.current) {
//       imgRef.current.style.transform = `translateY(${moveY}px)`;
//     }
//   };

//   const handleMouseLeave = () => {
//     if (imgRef.current) {
//       imgRef.current.style.transform = `translateY(0px)`;
//     }
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         width: "400px",
//         height: "400px",
//         overflow: "hidden",
//         border: "2px solid #ddd",
//         margin: "50px auto",
//         position: "relative",
//         background: "#f4f4f4",
//         cursor: "pointer"
//       }}
//     >
//       <img
//         ref={imgRef}
//         src="https://media.istockphoto.com/id/183880070/photo/black-wheelchair-on-white-background.jpg?s=612x612&w=0&k=20&c=es7shP4g4_PjazHpJJ88irxREO9YlOk60Kv0bJAl_do="
//         alt="Toy"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           transition: "transform 0.2s ease-out",
//         }}
//       />
//     </div>
//   );
// };

// export default Animation;







// import React, { useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";



// const Animation = () => {
//   const [position, setPosition] = useState([0, 0, 0]);

//   const handleClick = () => {
//     const newX = Math.random() * 4 - 2;
//     const newY = Math.random() * 2;
//     const newZ = Math.random() * 4 - 2;
//     setPosition([newX, newY, newZ]);
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight
//           position={[5, 5, 5]}
//           castShadow
//           intensity={1}
//         />
//         <mesh position={position} onClick={handleClick} castShadow>
//           <boxGeometry args={[1, 1, 1]} />
//           <meshStandardMaterial color="orange" />
//         </mesh>
//         <OrbitControls />
//         <gridHelper args={[10, 10]} />
//       </Canvas>
//     </div>
//   );
// };

// export default Animation;


// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// const Car = () => {
//   const group = useRef();
//   const { scene } = useGLTF("/car.glb"); // Place `car.glb` inside public/

//   const cameraRef = useRef();

//   useFrame(({ camera }) => {
//     if (group.current) {
//       // Rotate the car to face the same direction as the camera
//       const cameraDirection = new THREE.Vector3();
//       camera.getWorldDirection(cameraDirection);

//       const targetY = Math.atan2(cameraDirection.x, cameraDirection.z);
//       group.current.rotation.y = targetY;
//     }
//   });

//   return (
//     <group ref={group} scale={1.5} position={[0, 0, 0]}>
//       <primitive object={scene} />
//     </group>
//   );
// };

// const Animation = () => {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas shadows camera={{ position: [0, 2, 5], fov: 60 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
//         <Car />
//         <OrbitControls enablePan={false} />
//         <gridHelper args={[10, 10]} />
//       </Canvas>
//     </div>
//   );
// };

// export default Animation;
