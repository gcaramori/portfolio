'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import ComputerModel from './computerModel'
import { Spinner } from '../spinner'

export function Computer() {
  return (
    <div className="block relative w-96 2xl:w-[500px] h-96 2xl:h-[500px] overflow-hidden mx-auto">
      <Canvas
        dpr={[1, 2]}
        frameloop="always"
        camera={{ position: [-1.5, 1, 1.25], fov: 55 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <Suspense
          fallback={
            <Html center>
              <Spinner />
            </Html>
          }
        >
          <ComputerModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  )
}
