import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function useRoll(diceRef: any,) {  
  function roll() {
    
    gsap.set("g#all-sides", {y: "0"})
    const tl = gsap.timeline();
    tl.to("g#all-sides", {
      repeat: -1,
      repeatDelay: 1,
      ease: "none",
      y: "600",
    })
  }
  useLayoutEffect(()=> {
   const ctx = gsap.context(() => {
     roll();
    }, diceRef);
    return () => ctx.revert();
  }, []);
}



// transform: translateY(69px);