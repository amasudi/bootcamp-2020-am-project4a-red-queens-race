import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Background1 = () => {
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
    getAnimation().currentTime = getAnimation().effect.getTiming().duration / 2;
  }
  return (
    <div className="scenery" ref={ref}>
      <img
        id="r_pawn_upright"
        src="/assets/images/r_pawn_upright_small.png"
        srcSet="
            /assets/images/r_pawn_upright.png 2x
          "
        alt=" "
      />
      <img
        id="w_rook"
        src="/assets/images/w_rook_small.png"
        srcSet="
            /assets/images/w_rook.png 2x
          "
        alt=" "
      />
      <img
        id="palm1"
        src="/assets/images/palm1_small.png"
        srcSet="/assets/images/palm1.png 2x"
        alt=" "
      />
    </div>
  );
};
