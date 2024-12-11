// "use client";
// import * as THREE from "three";
// import { Suspense, useRef, useMemo, useEffect } from "react";

// import {
//   ContactShadows,
//   Environment,
//   useGLTF,
// } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// // Preload models
// useGLTF.preload("/model/camera2.glb");
// useGLTF.preload("/model/ink_pen.glb");
// useGLTF.preload("/model/hand.glb");

// export default function Scene() {
//   return (
//     <div className="w-full h-full absolute">
//       <Canvas
//         className=""
//         shadows
//         gl={{ antialias: true }}
//         dpr={[1, 1.2]}
//         camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 100 }}
//       >
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[5, 5, 5]} intensity={0.5} />
//         <Geometry />
        
//         <Suspense fallback={null}>
//           <ContactShadows
//             position={[0, -3.5, 0]}
//             opacity={0.25}
//             scale={40}
//             blur={1}
//             far={4}
//           />
//           <Environment preset="city" />
//           {/* <EffectComposer>
           
//             <Pixelation
//               granularity={1} // pixel granularity
//             />
//           </EffectComposer> */}
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// const Geometry = () => {
//   const { scene: cameraScene }: any = useGLTF("/model/camera2.glb");
//   const { scene: penScene }: any = useGLTF("/model/ink_pen.glb");
//   const { scene: handScene }: any = useGLTF("/model/hand.glb");
//   const handRef = useRef<THREE.Mesh>(null);
//   const inkRef = useRef<THREE.Mesh>(null);
//   const camRef = useRef<THREE.Mesh>(null);

//   // Get viewport size
//   const { viewport } = useThree();
//   const isMobile = viewport.width < 7; // Three.js viewport units

//   // Calculate responsive values
//   const scale = {
//     camera: isMobile ? 4 : 7,
//     ink: isMobile ? 5.5 : 8.5,
//     hand: isMobile ? 1.5 : 2.2,
//   };

//   const position = {
//     camera: [isMobile ? 1.5 : 3.8, 0.8, 0] as any,
//     ink: [0, 0.8, 0] as any,
//     hand: [isMobile ? -1.5 : -3.8, -1, 0] as any,
//   };

//   // Memoize animation constants for better performance
//   const animationConfig = useMemo(() => ({
//     baseY: 0.8,
//     baseFreq: 0.6,
//     amplitude: isMobile ? 0.05 : 0.08,
//     noiseAmount: isMobile ? 0.015 : 0.02,
//     positionNoise: isMobile ? 0.02 : 0.03
//   }), [isMobile]);

//   useFrame((state) => {
//     if (!handRef.current || !inkRef.current || !camRef.current) return;

//     const elapsed = state.clock.getElapsedTime();
//     const { baseY, baseFreq, amplitude, noiseAmount, positionNoise } = animationConfig;
    
//     // Calculate common values once
//     const baseOffset = baseY + Math.sin(elapsed * baseFreq) * amplitude;
    
//     // Batch updates for each object
//     handRef.current.position.y = baseOffset + Math.sin(elapsed * 1.1) * noiseAmount;
//     handRef.current.position.x = position.hand[0] + Math.sin(elapsed * 0.8) * positionNoise;
//     handRef.current.rotation.z = Math.sin(elapsed * 0.5) * 0.02;

//     inkRef.current.position.y = baseOffset + Math.sin(elapsed * 0.9) * noiseAmount;
//     inkRef.current.position.x = position.ink[0] + Math.sin(elapsed * 0.7) * positionNoise;
//     inkRef.current.rotation.y = Math.sin(elapsed * 0.4) * 0.03;

//     camRef.current.position.y = baseOffset + Math.sin(elapsed * 1.2) * noiseAmount;
//     camRef.current.position.x = position.camera[0] + Math.sin(elapsed * 0.9) * positionNoise;
//     camRef.current.rotation.y = Math.sin(elapsed * 0.3) * 0.02;
//   });

//   // Apply glassy material to hand model
//   handScene.traverse((child: any) => {
//     if (child.isMesh) {
//       child.material = new THREE.MeshPhysicalMaterial({
//         color: "#ff69b4", // Pink color
//         roughness: 0, // Very smooth surface
//         metalness: 0.7, // Slight metallic effect
//         transmission: 0.4, // High transparency
//         thickness: 1.5, // Glass thickness
//         ior: 1.5, // Glass-like refraction
//         transparent: true,
//         opacity: 0.7, // Transparency level
//       });
//     }
//   });


//   useEffect(() => {
//     if (!camRef.current || !inkRef.current || !handRef.current) return;

//     const ctx = gsap.context(() => {
//       // Set initial scales
//       camRef.current?.scale.set(0, 0, 0);
//       inkRef.current?.scale.set(0, 0, 0);
//       handRef.current?.scale.set(0, 0, 0);
      
//       // Camera animation
//       gsap.to(camRef.current?.scale as any, {
//         x: scale.camera,
//         y: scale.camera,
//         z: scale.camera,
//         duration: 2.2,
//         delay: 3,
//         ease: 'elastic.out(2, 0.8)'
//       });

//       // Ink pen animation (delayed slightly)
//       gsap.to(inkRef.current?.scale as any, {
//         x: scale.ink,
//         y: scale.ink,
//         z: scale.ink,
//         duration: 3.2,
//         delay:4,
//         ease: 'elastic.out(2, 0.8)'
//       });

//       // Hand animation (delayed more)
//       gsap.to(handRef.current?.scale as any, {
//         x: scale.hand,
//         y: scale.hand,
//         z: scale.hand,
//         duration: 2.2,
//         delay: 5,
//         ease: 'elastic.out(2, 0.8)'
//       });

//       // Animate materials opacity if they exist
//       [camRef, inkRef, handRef].forEach((ref, index) => {
//         if (ref.current?.material) {
//           gsap.fromTo(ref.current?.material, {
//             opacity: 0
//           }, {
//             opacity: 1,
//             duration: 1.2,
//             delay: index * 0.2,
//             ease: 'power2.out'
//           });
//         }
//       });
//     });

//     return () => {
//       ctx.revert();
//     };
//   }, [scale.camera, scale.ink, scale.hand]);

//   return (
//     <>
//       <mesh
//         ref={camRef}
//         scale={[scale.camera, scale.camera, scale.camera]}
//         position={position.camera}
//         rotation={[0, 0, 0]}
//       >
//         <primitive  object={cameraScene} />
//       </mesh>

//       <mesh
//         ref={inkRef}
//         scale={[scale.ink, scale.ink, scale.ink]}
//         position={position.ink}
//         rotation={[0, 0, 0]}
//       >
//         <primitive object={penScene} />
//       </mesh>

//       <mesh
//         ref={handRef}
//         position={position.hand}
//         scale={[scale.hand, scale.hand, scale.hand]}
//         rotation={[1, 3, 0]}
//       >
//         <primitive object={handScene} />
//       </mesh>
//     </>
//   );
// };
'use client';
import React, { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  return (
    <div className="w-full h-full absolute">
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.2]} // Adjust DPR for performance
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={<Loading/>}>
          <Geometry />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.25}
            scale={40}
            blur={1}
            far={4}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Geometry = React.memo(() => {
  const { scene: cameraScene } = useGLTF("/model/camera2.glb");
  const { scene: penScene } = useGLTF("/model/ink_pen.glb");
  const { scene: handScene } = useGLTF("/model/hand.glb");
  const handRef = useRef<THREE.Mesh | any>(null);
  const inkRef = useRef<THREE.Mesh | any>(null);
  const camRef = useRef<THREE.Mesh | any>(null);

  const { viewport } = useThree();
  const isMobile = viewport.width < 7;

  const scale = useMemo(() => ({
    camera: isMobile ? 4 : 7,
    ink: isMobile ? 5.5 : 8.5,
    hand: isMobile ? 1.5 : 2.2,
  }), [isMobile]);

  const position:any = useMemo(() => ({
    camera: [isMobile ? 1.5 : 3.8, 0.8, 0],
    ink: [0, 0.8, 0],
    hand: [isMobile ? -1.5 : -3.8, -1, 0],
  }), [isMobile]);

  const animationConfig = useMemo(() => ({
    baseY: 0.8,
    baseFreq: 0.6,
    amplitude: isMobile ? 0.05 : 0.08,
    noiseAmount: isMobile ? 0.015 : 0.02,
    positionNoise: isMobile ? 0.02 : 0.03
  }), [isMobile]);

  useFrame((state) => {
    if (!handRef.current || !inkRef.current || !camRef.current) return;

    const elapsed = state.clock.getElapsedTime();
    const { baseY, baseFreq, amplitude, noiseAmount, positionNoise } = animationConfig;
    
    const baseOffset = baseY + Math.sin(elapsed * baseFreq) * amplitude;
    
    handRef.current.position.y = baseOffset + Math.sin(elapsed * 1.1) * noiseAmount;
    handRef.current.position.x = position.hand[0] + Math.sin(elapsed * 0.8) * positionNoise;
    handRef.current.rotation.z = Math.sin(elapsed * 0.5) * 0.02;

    inkRef.current.position.y = baseOffset + Math.sin(elapsed * 0.9) * noiseAmount;
    inkRef.current.position.x = position.ink[0] + Math.sin(elapsed * 0.7) * positionNoise;
    inkRef.current.rotation.y = Math.sin(elapsed * 0.4) * 0.03;

    camRef.current.position.y = baseOffset + Math.sin(elapsed * 1.2) * noiseAmount;
    camRef.current.position.x = position.camera[0] + Math.sin(elapsed * 0.9) * positionNoise;
    camRef.current.rotation.y = Math.sin(elapsed * 0.3) * 0.02;
  });

  useEffect(() => {
    if (!camRef.current || !inkRef.current || !handRef.current) return;

    const ctx = gsap.context(() => {
      camRef.current?.scale.set(0, 0, 0);
      inkRef.current?.scale.set(0, 0, 0);
      handRef.current?.scale.set(0, 0, 0);
      
      gsap.to(camRef.current?.scale, {
        x: scale.camera,
        y: scale.camera,
        z: scale.camera,
        duration: 2.2,
        delay: 3,
        ease: 'elastic.out(2, 0.8)'
      });

      gsap.to(inkRef.current?.scale, {
        x: scale.ink,
        y: scale.ink,
        z: scale.ink,
        duration: 3.2,
        delay: 4,
        ease: 'elastic.out(2, 0.8)'
      });

      gsap.to(handRef.current?.scale, {
        x: scale.hand,
        y: scale.hand,
        z: scale.hand,
        duration: 2.2,
        delay: 5,
        ease: 'elastic.out(2, 0.8)'
      });

      [camRef, inkRef, handRef].forEach((ref, index) => {
        if (ref.current?.material) {
          gsap.fromTo(ref.current?.material, {
            opacity: 0
          }, {
            opacity: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: 'power2.out'
          });
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, [scale.camera, scale.ink, scale.hand]);

  return (
    <>
      <mesh
        ref={camRef}
        scale={[scale.camera, scale.camera, scale.camera]}
        position={position.camera}
        rotation={[0, 0, 0]}
      >
        <primitive object={cameraScene} />
      </mesh>

      <mesh
        ref={inkRef}
        scale={[scale.ink, scale.ink, scale.ink]}
        position={position.ink}
        rotation={[0, 0, 0]}
      >
        <primitive object={penScene} />
      </mesh>

      <mesh
        ref={handRef}
        position={position.hand}
        scale={[scale.hand, scale.hand, scale.hand]}
        rotation={[1, 3, 0]}
      >
        <primitive object={handScene} />
      </mesh>
    </>
  );
});

const Loading = () => {
    return <>
      ...
    </>
} 