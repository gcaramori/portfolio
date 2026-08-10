'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import ComputerModel from './computerModel'
import { Spinner } from '../spinner'

export function Computer() {
  return (
    <div className="relative mx-auto block h-[18rem] w-full max-w-[20rem] overflow-hidden md:h-[21rem] md:max-w-[23rem] 2xl:h-[26rem] 2xl:max-w-[28rem]">
      <Canvas
        shadows
        dpr={[1, 2]}
        frameloop="always"
        camera={{ position: [-1.2, 1, 1.5], fov: 52 }}
        gl={{
          antialias: true,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          shadow-mapSize={[512, 512]}
        />

        <Suspense
          fallback={
            <Html center>
              <Spinner />
            </Html>
          }
        >
          <ComputerModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.6}
        />
      </Canvas>
    </div>
  )
}
