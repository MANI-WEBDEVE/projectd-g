"use client";
import { ReactLenis } from 'lenis/react'

const options = {
  lerp: 4,
  duration: 2,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  let a = 34;
  console.log(a)
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}
