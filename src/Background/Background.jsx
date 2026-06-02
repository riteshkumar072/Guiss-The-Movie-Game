import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Sparkles } from "@react-three/drei"
import { useRef } from "react"

function AnimatedStars() {
    const starRef = useRef();

    useFrame((state)=>{
        if(starRef.current){
            starRef.current.rotation.y = state.clock.getElapsedTime()*0.02;
            starRef.current.rotation.x = state.clock.getElapsedTime()*0.01;
        }
    });
    return <> <Stars ref={starRef} radius={100} depth={50} count={2000} factor={6} saturation={0} fade speed={2} />
            <Sparkles  count={50} scale={6} size={4} speed={0.3} opacity={0.4} color="##a855f7"/>
            <Sparkles  count={50} scale={6} size={4} speed={0.3} opacity={0.3} color="#eab308"/>
            </>
};  

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#040409] bg-[radial-gradient(circle_at_30%_30%,rgba(88,28,135,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(29,78,216,0.12)_0%,transparent_50%)]">
        <Canvas camera={{position: [0,0,1]}}>
            <ambientLight/>
            <AnimatedStars/>
        </Canvas>
    </div>
  )
}

export default Background