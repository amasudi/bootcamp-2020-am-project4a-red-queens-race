import React, { useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from "../context/GlobalContext";

export const Foreground1 = () => {
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
      data.animationForeground1 === undefined ||
      data.animationForeground1 === null
    ) {
      handleAllAnimations("animationForeground1", getAnimation());
    }
    getAnimation().currentTime = getAnimation().effect.getTiming().duration / 2;
  }
  return (
    <div className="scenery" id="foreground1" ref={ref}>
      <img
        id="palm3"
        src="/assets/images/palm3_small.png"
        srcSet="/assets/images/palm3.png 2x"
        alt=" "
      />
    </div>
  );
};
