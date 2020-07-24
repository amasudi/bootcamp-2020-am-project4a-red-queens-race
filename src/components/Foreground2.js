import React, { useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from "../context/GlobalContext";
export const Foreground2 = () => {
  let { data, handleAllAnimations } = useContext(GlobalContext);
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });
  if (getAnimation() !== undefined) {
    if (
      data.animationForeground2 === undefined ||
      data.animationForeground2 === null
    ) {
      handleAllAnimations("animationForeground2", getAnimation());
    }
  }
  return (
    <div className="scenery" id="foreground2" ref={ref}>
      <img
        id="bush"
        src="/assets/images/bush_small.png"
        srcSet="/assets/images/bush.png 2x"
        alt=" "
      />
      <img
        id="w_rook_upright"
        src="/assets/images/w_rook_upright_small.png"
        srcSet="
            /assets/images/w_rook_upright.png 2x
          "
        alt=" "
      />
    </div>
  );
};
