import { Spinning, StandardReality, Model, Interactable } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import {Sky, Cloud} from "@react-three/drei";

export default function Starter() {
  return (
    <StandardReality playerProps={{
      pos: [0,1,1]
    }}>
      <ambientLight/>
      <Model scale={0.007} position-y = {0.01} rotation-x={-Math.PI/2} src = "./vrShowcase.glb"></Model>
      <Spinning ySpeed={1.5}>
        <Interactable onClick={() => window.open("https://docs.pmnd.rs/react-three-fiber/getting-started/introduction!")}>
          <Model scale={0.09} position-y={0.9} position-z={-0.03} src="./react_logo.glb"></Model>
        </Interactable>
      </Spinning>
      <TransparentFloor opacity={0.7} />
      <Sky sunPosition={[0,1,0]}></Sky>
      <Cloud position-y={15}></Cloud>
    </StandardReality>
  );
}