import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
//Components
// import Header from "./components/header";
// Styles
import "./App.css";
// React Spring
import { useSpring, animated } from "react-spring";
import * as THREE from "three";

export interface SpinningMeshProps {
  position: any;
  color?: any;
  speed?: any;
  args?: any;
}

const SpinningMesh = ({ position, color, speed, args }: SpinningMeshProps) => {
  //ref to target the mesh
  const mesh = useRef();
  

  //useFrame allows us to re-render/update rotation on each frame
  // useFrame(() => {
  //   if (mesh && mesh.current) {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  //   }
  // });

  //Basic expand state
  const [expand, setExpand] = useState(false);

  const scale = expand
    ? new THREE.Vector3(1.4, 1.4, 1.4)
    : new THREE.Vector3(1, 1, 1);

  // React spring expand animation
  // const props = useSpring({
  //   scale: scale
  // });

  return (
    <mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
    </mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};

export default SpinningMesh;
