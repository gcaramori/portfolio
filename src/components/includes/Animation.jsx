import { useRef, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';

function Cube() {
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
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    );
}

export function Animation() {
    return(
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<Spinner />}>
                <Cube />
            </Suspense>
        </Canvas>
    );
}