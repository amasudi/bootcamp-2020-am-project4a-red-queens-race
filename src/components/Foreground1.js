import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Foreground1 = () => {
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
    getAnimation().currentTime = getAnimation().effect.getTiming().duration / 2;
  }
  return (
    <div className="scenery" ref={ref}>
      <img
        id="palm3"
        src="/assets/images/palm3_small.png"
        srcSet="/assets/images/palm3.png 2x"
        alt=" "
      />
    </div>
  );
};
