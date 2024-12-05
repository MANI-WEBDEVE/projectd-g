"use client";
import * as THREE from "three";
import { Suspense, useRef, useEffect } from "react";
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import {gsap} from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Scene() {

  return (
    <div className="w-full h-full absolute">
      <Canvas
        className=""
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.2]}
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Geometry />
        <OrbitControls />
        <Suspense fallback={null}>
          <ContactShadows position={[0, -3.5, 0]} opacity={0.25} scale={40} blur={1} far={4} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Geometry = () => {
  const { scene: cameraScene }: any = useGLTF("/model/camera2.glb");
  const { scene: penScene }: any = useGLTF("/model/ink_pen.glb");
  const {scene:handScene }:any = useGLTF("/model/hand.glb") 
  const handRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (handRef.current) {
      // Create infinite floating animation
      gsap.to(handRef.current.position, {
        y: 0,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Add subtle rotation
      // gsap.to(handRef.current.rotation, {
      //   y: 2,
      //   x: 0.4,
      //   duration: 2,
      //   ease: "power1.inOut",
      //   yoyo: true,
      //   repeat: -1
      // });
    }
  }, []);

  // Apply glassy material to hand model
  handScene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: '#ff69b4',  // Pink color
        roughness: 0,    // Very smooth surface
        metalness: 0.7,    // Slight metallic effect
        transmission: 0.4, // High transparency
        thickness: 1.5,    // Glass thickness
        ior: 1.5,         // Glass-like refraction
        transparent: true,
        opacity: 0.7,      // Transparency level
      });
    }
  });

  return (
    <>
      {/* Camera - top right */}
      <mesh scale={[5.6, 5.6, 5.6]} position={[3.6, 1.5, 0]} rotation={[0, 0, 0]}>
        <primitive object={cameraScene} />
      </mesh>

      {/* Ink Pen - opposite to camera */}
      <mesh scale={[7.5, 7.5, 7.5]} position={[-3.6, 1.5, 0]} rotation={[0, 0, 0]}>
        <primitive object={penScene} />
      </mesh>

      {/* Three.js Cube - bottom right */}
      <mesh position={[3.5, -1.5, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshPhysicalMaterial color="#64E9F8" />
      </mesh>

      <mesh ref={handRef} position={[0, 0, 0]} scale={[3, 3, 3]} rotation={[1, 2, 0]}>
        <primitive object={handScene}/>
      </mesh>
    </>
  );
};