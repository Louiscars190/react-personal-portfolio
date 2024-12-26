"use client";

import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



export default function Laptop() {

    return (
        <div className='h-96 w-96'>
            <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={1.5} position={[10, 10, 5]} />
                    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
            </Canvas>
        </div>
    )
}