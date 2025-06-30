'use client'

import { useRef, useMemo, memo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/computer/scene-final.glb')

const SCALE = 0.004

function ComputerModel() {
  const modelRef = useRef<THREE.Group>(null)

  const { scene: originalScene } = useGLTF('/computer/scene-final.glb')

  const scene = useMemo(() => {
    const clonedScene = originalScene.clone(true)
    clonedScene.rotation.set(0, (3 * Math.PI) / 2, 0)

    clonedScene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshStandardMaterial
        const clonedMaterial = material.clone()
        clonedMaterial.roughness = 0.4
        clonedMaterial.metalness = 0.6

        for (const mapName of ['map', 'normalMap', 'roughnessMap'] as const) {
          const map = clonedMaterial[mapName]
          if (map) {
            map.minFilter = THREE.LinearFilter
            map.magFilter = THREE.LinearFilter
            map.needsUpdate = true
          }
        }

        child.material = clonedMaterial
      }
    })

    return clonedScene
  }, [originalScene])

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={[SCALE, SCALE, SCALE]} />
    </group>
  )
}

export default memo(ComputerModel)
