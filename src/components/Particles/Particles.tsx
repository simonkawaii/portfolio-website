import { useState, useRef, Suspense, ElementRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random";
import { useStarmode } from "../../Context/StarModeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BackgroundStars(props: any) {
  const colorData = "#e62441";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: any = useRef<ElementRef<any>>();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colorData}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  const { starmode } = useStarmode();

  return (
    <div className={`w-full  h-auto fixed inset-0 z-[-2]`}>
      {starmode === "true" ? (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <BackgroundStars />
          </Suspense>

          <Preload all />
        </Canvas>
      ) : null}
    </div>
  );
};

export default StarsCanvas;
