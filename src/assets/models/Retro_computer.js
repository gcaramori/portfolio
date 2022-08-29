import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/retro_computer.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={5.5}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
      </group>
    </group>
  )
}

useGLTF.preload('/retro_computer.gltf')
