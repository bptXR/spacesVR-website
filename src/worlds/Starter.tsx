import { Spinning, Floating, StandardReality, Model } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import CloudySky from "ideas/CloudySky";
import {Sky, Cloud} from "@react-three/drei";

export default function Starter() {
  return (
    <StandardReality>
      <ambientLight intensity={4}/>
      <Model scale={0.007} position-y = {0.01} rotation-x={-Math.PI/2} src = "./vrShowcase.glb"></Model>
      <Spinning ySpeed={1.5}>
      <Model scale={0.09} position-y={0.9} position-z={-0.03} src="./react_logo.glb"></Model>
      </Spinning>
      <TransparentFloor opacity={0.7} />
      <Sky sunPosition={[0,1,0]}></Sky>
      <Cloud position-y={15}></Cloud>
    </StandardReality>
  );
}
