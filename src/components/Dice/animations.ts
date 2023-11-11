import { useLayoutEffect, useState } from 'react';
import { gsap, Power3 } from 'gsap';

export function useRoll(diceRef: any,) { 
  const [trigger, setStrigger] = useState<boolean>(false);
  const triggerRoll = () => setStrigger((s: boolean) => !s);
 
  function roll() {
    gsap.set("g#all-sides", { y: "0" })
    const tl = gsap.timeline();
    tl.to("g#all-sides", {
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
  }, [trigger]);

  return triggerRoll;
}

export function useAutoRoll(diceRef: any,) { 
  function roll() {
    const tl = gsap.timeline();
    tl.to("g#all-sides", {
      repeatDelay: 1.5,
      repeat: -1,
      ease: Power3.easeInOut,
      y: "-500",
    })
  }
  useLayoutEffect(()=> {
   const ctx = gsap.context(() => {
     roll();
    }, diceRef);
    return () => ctx.revert();
  });
}