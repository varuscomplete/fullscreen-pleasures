import { Html } from "@react-three/drei";
import { FC } from "react";

interface Props {
  index: number;
}

const LineTexts: FC<Props> = (props) => {
  return (
    <>
      {props.index === 34 ? (
        <Html position={[-5, 5, 1]}>
          <p className="texts stage-three when-routine-bites-hard">
            BE THE ONE WE NEED
          </p>
        </Html>
      ) : null}

      {props.index === 46 ? (
        <Html position={[-2, -2, 1]}>
          <p className="texts stage-three and-ambitions-are-low">
            BE THE ONE WE NEED
          </p>
        </Html>
      ) : null}

      {props.index === 64 ? (
        <Html position={[-5, 12, 1]}>
          <p className="texts stage-three and-resentment-rides-high">
            I DON'T UNDERSTAND
          </p>
        </Html>
      ) : null}

      {props.index === 0 ? (
        <Html position={[0, 1, 1]}>
          <p className="texts stage-four but-emotions-wont-grow">
            THIS IS WHAT <br /> WE HAVE
          </p>
          <p className="texts stage-four and-were-changing-our-ways">
            BEEN <br /> EXPECTING FOR
          </p>
          <p className="texts stage-four taking-different-roads">
            WAITING FOR <br /> EXPECTING FOR
          </p>
        </Html>
      ) : null}

      {props.index === 0 ? (
        <Html position={[0, 0, 1.7]}>
          <p className="texts stage-five again">WAITING</p>
        </Html>
      ) : null}

      {props.index === 0 ? (
        <Html position={[0, 0, 2]}>
          <p className="texts stage-five love">WAITING FOR</p>
        </Html>
      ) : null}
    </>
  );
};

export default LineTexts;
