'use client'

import React, { Suspense, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { ComputerModel } from './computerModel'

export function Computer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const glRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    return () => {
      if (glRef.current) {
        try {
          glRef.current.dispose()

          glRef.current = null
        } catch (error) {
          console.error('Error disposing WebGLRenderer:', error)
        }
      }
    }
  }, [])

  if (!isHomePage) {
    return null
  }

  return (
    <div className="absolute inset-y-0 right-10 my-auto w-full lg:w-1/2 h-72 md:h-1/2 lg:h-full flex items-center justify-center order-1 lg:order-2">
      <Canvas
        dpr={[1, 1]}
        frameloop="demand"
        camera={{ position: [-1.5, 1, 1.25], fov: 55 }}
        onCreated={(state) => {
          glRef.current = state.gl
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <Suspense fallback={null}>
          <ComputerModel />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  )
}
