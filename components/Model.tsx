"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { ScrollControls, OrbitControls, useScroll } from "@react-three/drei"
import { useRef } from "react"
import { Square } from "./Square"

export default function Model() {
  return (
   <Canvas camera={{ position: [5, 17, 10], fov: 100 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[1, 5, 5]} intensity={4} />
        <OrbitControls enableZoom={false} />
        <ScrollAnimatedSquare />
    </Canvas>

  )
}

import * as THREE from "three"

function ScrollAnimatedSquare() {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    const scrollY = window.scrollY
    const scrollFactor = Math.min(scrollY / 1000, 1) // normalize scroll
    if (ref.current) {
      ref.current.rotation.y = scrollFactor * Math.PI
      ref.current.position.y = scrollFactor * -2
    }
  })

  return (
    <group ref={ref}>
      <Square />
    </group>
  )
}
