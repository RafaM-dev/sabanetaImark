import { useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

export const useInViewWithAnimation = () => {
  const refs = {
    div1: useRef(),
  };

  const controls = {
    div1: useAnimation(),
  };

  const inView = {
    div1: useInView(refs.div1, { once: true }),
  };

  useEffect(() => {
    if (inView.div1) {
      controls.div1.start("visible");
    }
  }, [inView.div1, controls.div1]);
  return { refs, controls, inView };
};
