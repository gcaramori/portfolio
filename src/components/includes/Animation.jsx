import { useRef, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

function Cube() {
    const objScene = useLoader(OBJLoader, '/low.obj');
    const meshRef = useRef(null);

    useFrame(() => {
        if(!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return(
        <mesh ref={meshRef}>
            <primitive object={objScene} />
        </mesh>
    );
}

export function Animation() {
    return(
        <Canvas>
            <Suspense fallback={<Spinner />}>
                <Cube />
            </Suspense>
        </Canvas>
    );
}