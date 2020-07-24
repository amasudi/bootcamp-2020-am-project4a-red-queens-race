import React, { useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from "../context/GlobalContext";
export const Background2 = () => {
  let { data, handleAllAnimations } = useContext(GlobalContext);
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  });
  if (getAnimation() !== undefined) {
    if (
      data.animationBackground2 === undefined ||
      data.animationBackground2 === null
    ) {
      handleAllAnimations("animationBackground2", getAnimation());
    }
  }
  return (
    <div className="scenery" id="background2" ref={ref}>
      <img
        id="r_pawn"
        src="/assets/images/r_pawn_small.png"
        srcSet="
            /assets/images/r_pawn.png 2x
          "
        alt=" "
      />
      <img
        id="r_knight"
        src="/assets/images/r_knight_small.png"
        srcSet="
            /assets/images/r_knight.png 2x
          "
        alt=" "
      />
      <img
        id="palm2"
        src="/assets/images/palm2_small.png"
        srcSet="/assets/images/palm2.png 2x"
        alt=" "
      />
    </div>
  );
};
