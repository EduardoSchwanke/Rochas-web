import { useFrame, useLoader } from '@react-three/fiber'

import Maptexture from '../../images/mapworld.jpg'
import { TextureLoader } from 'three'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

export function Mymesh() {

    const [normalMap] = useLoader(TextureLoader, [Maptexture])

    const earthRef = useRef()

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        earthRef.current.rotation.y = elapsedTime / 64
    })
    return(
        <>
            <mesh ref={earthRef} scale={[3,3,3]}> 
                <sphereGeometry args={[ 1, 32, 32 ]}/>
                <meshPhongMaterial />
                <meshStandardMaterial map={normalMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
                <OrbitControls enableZoom={false} enableRotate={true} panSpeed={1} rotateSpeed={0.3}/>

                <mesh position={[0.1, 0.1, 1]} scale={[0.1, 0.1, 0.1]}>
                    <sphereBufferGeometry />
                    <meshBasicMaterial color='red'/>
                </mesh>
            </mesh>
        </>
    )
}