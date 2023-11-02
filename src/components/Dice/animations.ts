import { useLayoutEffect } from 'react';
import { gsap, Power3 } from 'gsap';

export function useRoll(diceRef: any,) {  
  function roll() {
    gsap.set("g#all-sides", {y: "0"})
    const tl = gsap.timeline();
    tl.to("g#all-sides", {
      repeat: -1,
      duration: 2,
      repeatDelay: 1,
      ease: Power3.easeInOut,
      y: "-500",
    })
  }
  useLayoutEffect(()=> {
   const ctx = gsap.context(() => {
     roll();
    }, diceRef);
    return () => ctx.revert();
  }, []);
}