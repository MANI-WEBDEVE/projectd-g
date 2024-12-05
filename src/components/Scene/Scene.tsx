"use client";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

export default function Scene() {
  return (
    <div className="w-full h-full absolute">
      <Canvas
        className="z-[999]"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.2]}
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.5} />
        <Geometry />
        <OrbitControls />
        <Suspense fallback={null}>
          <directionalLight position={[10, 10, 5]} intensity={1} color="hotpink" />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.25} scale={40} blur={1} far={4} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Geometry = () => {
  const { scene }: any = useGLTF("/model/hand.glb");

  // **Leva Controls**
  const { color, roughness, metalness, transmission, ior, opacity } = useControls({
    color: { value: "#b52d7c", label: "Color" },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0.8, min: 0, max: 1, step: 0.01 },
    transmission: { value: 0.9, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 2.5, step: 0.1 },
    opacity: { value: 0.5, min: 0, max: 1, step: 0.01 },
  });

  // Apply material to the hand model
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0,
        metalness: 1,
        transmission: 0, // For glassy effect
        ior: 2.5, // Refraction effect
        opacity:0.65,
        transparent: true,
        thickness: 1, // Thickness of the glass
      });
    }
  });

  return (
    <mesh scale={3} position={[2,0,0]}>
      <primitive object={scene} />
    </mesh> 
  );
};
