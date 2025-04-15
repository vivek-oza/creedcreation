// GlassStar.jsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function GlassStar(props) {
    const meshRef = useRef()

    useFrame(() => {
        meshRef.current.rotation.y += 0.003
        meshRef.current.rotation.x += 0.001
    })

    const shape = new THREE.Shape()
    shape.moveTo(0, 1)
    shape.bezierCurveTo(0.6, 0.6, 0.6, -0.6, 0, -1)
    shape.bezierCurveTo(-0.6, -0.6, -0.6, 0.6, 0, 1)

    const extrudeSettings = {
        steps: 2,
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: 0,
        bevelSegments: 5,
    }

    return (
        <mesh ref={meshRef} {...props}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <MeshTransmissionMaterial
                backside
                thickness={0.6}
                transmission={1}
                roughness={0.2}
                ior={1.5}
                chromaticAberration={0.02}
                anisotropy={0.1}
                distortion={0.15}
                distortionScale={0.8}
                temporalDistortion={0.2}
                color="#ff6a00" // Reddish-orange base
                attenuationDistance={1}
                attenuationColor="#ffd1a1" // Gradient-ish tint
            />
        </mesh>
    )
}
