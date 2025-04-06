'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { LoaderCircle } from 'lucide-react'

function ComputerModel({ scale }: { scale: number }) {
  const modelRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF('/laptop_free_optimized.glb')

  scene.rotation.set(0, (4.1 * Math.PI) / 2, 0)

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material as THREE.MeshStandardMaterial

      material.roughness = 0.3
      material.metalness = 0.7
      material.emissive = new THREE.Color(0x222222)
      material.emissiveIntensity = 0.2
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[scale, scale, scale]}
      castShadow
      receiveShadow
      position={[0, -0.7, 0]}
    />
  )
}

export function Computer3D() {
  let scale = 0.0065

  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const IsTablet =
    typeof window !== 'undefined' &&
    window.innerWidth > 760 &&
    window.innerWidth < 1024

  if (isMobile) scale = 0.009
  if (IsTablet) scale = 0.01

  useEffect(() => {
    useGLTF.preload('/laptop_free_optimized.glb')

    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  return (
    <div className="relative lg:bottom-20 my-auto w-full lg:w-1/2 h-72 md:h-1/2 lg:h-full flex items-center justify-center order-1 lg:order-2">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="block relative text-gray-500 animate-spin">
            <LoaderCircle />
          </div>
        </div>
      )}

      <Canvas
        dpr={[1, 2]}
        className="block relative background-transparent"
        shadows={!isMobile}
        camera={{ position: [0, 1, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow={!isMobile}
          shadow-mapSize-width={isMobile ? 512 : 1024}
          shadow-mapSize-height={isMobile ? 512 : 1024}
        />
        <pointLight position={[0, 2, 3]} intensity={1} color={0xffffff} />

        <ComputerModel scale={scale} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  )
}
