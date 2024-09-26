import { Html } from "@react-three/drei";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <Html>
      <div className="loader-wrapper">
        <span className="loader" />
        <p>FULLSCREENING...</p>
      </div>
    </Html>
  );
};

export default Loader;
