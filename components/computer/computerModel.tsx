'use client'

import { useRef, memo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/computer/scene.gltf')

function ComputerModel() {
  const modelRef = useRef<THREE.Group>(null)

  const { scene } = useGLTF('/computer/scene.gltf')

  scene.rotation.set(0, (3 * Math.PI) / 2, 0)

  scene.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material as THREE.MeshStandardMaterial
      const clonedMaterial = material.clone()
      clonedMaterial.roughness = 0.4
      clonedMaterial.metalness = 0.6

      if (clonedMaterial.map) {
        clonedMaterial.map.minFilter = THREE.LinearFilter
        clonedMaterial.map.magFilter = THREE.LinearFilter
        clonedMaterial.map.needsUpdate = true
      }
      if (clonedMaterial.normalMap) {
        clonedMaterial.normalMap.minFilter = THREE.LinearFilter
        clonedMaterial.normalMap.magFilter = THREE.LinearFilter
        clonedMaterial.normalMap.needsUpdate = true
      }
      if (clonedMaterial.roughnessMap) {
        clonedMaterial.roughnessMap.minFilter = THREE.LinearFilter
        clonedMaterial.roughnessMap.magFilter = THREE.LinearFilter
        clonedMaterial.roughnessMap.needsUpdate = true
      }

      child.material = clonedMaterial
    }
  })

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={[0.0045, 0.0045, 0.0045]} />
    </group>
  )
}

export default memo(ComputerModel)
