import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Background2 = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  });
  return (
    <div className="scenery" ref={ref}>
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
