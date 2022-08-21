import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations, PresentationControls, Environment, ContactShadows, Html, OrbitControls, CameraShake } from '@react-three/drei'

export default function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 25 }}>
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <Watch rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={0.003} />
      </PresentationControls>
      
      <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
      <Environment preset="city" />
      </Suspense>
     
    </Canvas>
  )
}

function Rig() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()
  useFrame(() => camera.position.lerp(vec.set(Math.sin(mouse.x) * 100, mouse.y * 0.5, Math.cos(mouse.x) * 100), 0.05))
  return <CameraShake maxYaw={0.1} maxPitch={0.1} maxRoll={0.1} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} />
}

function Watch(props) {
  const ref = useRef()
  const { nodes, materials, animations } = useGLTF('/watch-v1.glb')
  const { actions } = useAnimations(animations, ref)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  return (
    <group ref={ref} {...props} dispose={null}>
    
      <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
        <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
          <div className="annotation">
            6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html>
      </mesh>
      
      <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch} />
    </group>
  )
}
