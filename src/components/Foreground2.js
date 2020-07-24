import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Foreground2 = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });
  return (
    <div className="scenery" ref={ref}>
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
