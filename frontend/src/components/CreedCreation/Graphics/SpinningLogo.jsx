// components/creedCreation/SpinningLogo.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Color Variables
const PRIMARY_COLOR = "#dd6b20";
const SECONDARY_COLOR = "#FF5E5B";
const GLOW_COLOR = "#ff6633";

function Shape() {
    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusKnotGeometry args={[1, 0.4, 128, 32]} />
            <meshPhysicalMaterial
                color={PRIMARY_COLOR}
                emissive={GLOW_COLOR}
                roughness={2}
                metalness={2}
                clearcoat={10}
                clearcoatRoughness={0.3}
                reflectivity={10}
            />
        </mesh>
    );
}

function SpinningLogo() {
    return (
        <Canvas
            camera={{ position: [0, 5, 0], fov: 60 }}
            style={{ height: "400px", width: "400px" }}
        >
            <ambientLight intensity={0.4} />
            <directionalLight intensity={2} position={[5, 5, 5]} />
            <pointLight color={GLOW_COLOR} intensity={1.5} position={[0, 0, 2]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={12} />
            <Shape />
        </Canvas>
    );
}

export default SpinningLogo;
