import React, { useContext } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import { GlobalContext } from "../context/GlobalContext";
export const AliceRedQueen = () => {
  let { data } = useContext(GlobalContext);
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ],
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  if (getAnimation() !== undefined) {
    const animation = getAnimation();

    var sceneries = [];
    if (
      data.animationForeground1 !== null &&
      data.animationForeground1 !== undefined
    ) {
      sceneries[0] = data.animationForeground1;
    }
    if (
      data.animationForeground2 !== null &&
      data.animationForeground2 !== undefined
    ) {
      sceneries[1] = data.animationForeground2;
    }
    if (
      data.animationBackground1 !== null &&
      data.animationBackground1 !== undefined
    ) {
      sceneries[2] = data.animationBackground1;
    }
    if (
      data.animationBackground2 !== null &&
      data.animationBackground2 !== undefined
    ) {
      sceneries[3] = data.animationBackground2;
    }
    var adjustBackgroundPlayback = function () {
      if (animation.playbackRate < 0.8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = (animation.playbackRate / 2) * -1;
        });
      } else if (animation.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = animation.playbackRate / 2;
          console.log("coming");
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    };
    adjustBackgroundPlayback();

    /* If Alice and the Red Queen are running at a speed of 1, the background doesn't move. */
    /* But if they fall under 1, the background slides backwards */
    setInterval(function () {
      /* Set decay */
      if (animation.playbackRate > 0.4) {
        animation.playbackRate *= 0.9;
      }
      adjustBackgroundPlayback();
    }, 3000);

    var goFaster = function () {
      /* But you can speed them up by giving the screen a click or a tap. */
      animation.playbackRate *= 1.1;
      adjustBackgroundPlayback();
    };

    document.addEventListener("click", goFaster);
    document.addEventListener("touchstart", goFaster);
  }
  return (
    <img
      id="red-queen_and_alice_sprite"
      ref={ref}
      src="/assets/images/sprite_running-alice-queen_small.png"
      srcSet="
              /assets/images/sprite_running-alice-queen_small.png 2x
            "
      alt="Alice and the Red Queen running to stay in place."
    />
  );
};
