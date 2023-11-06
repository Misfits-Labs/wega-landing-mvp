import { useLayoutEffect, useRef } from 'react';
import { FloatingOrbContainer, FloatingOrbBlurContainer } from './types';
import { gsap, Sine } from 'gsap';
import "twin.macro"
// interface FloatingOrbsProps {} 

export const FloatingOrbs: React.FC<React.AllHTMLAttributes<HTMLDivElement> & React.Attributes> = ({ children, ...props}: React.AllHTMLAttributes<HTMLDivElement> & React.Attributes) => {
  const orbContainerRef = useRef<any>(null);
  
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      const duration = 5;
      const orbs = orbContainerRef.current.querySelectorAll('.orb');
      tl.repeatDelay(0.25);
      tl.fromTo(orbs[0], { scale: 1.1, rotate: '0deg', x: "-=5rem", y: "+=3rem" }, { scale: 1.05 , rotate: '180deg', x: "+=3rem", y: "-=5rem", repeat: -1, yoyo: true,  duration, ease: Sine.easeInOut }, 'start')
      tl.fromTo(orbs[1], { scale: 1.05, rotate: '0deg', x: "-=3rem", y: "+=3rem" }, { scale: 1.1 , rotate: '180deg', x: "+=3rem", y: "-=3rem", repeat: -1, yoyo: true,  duration, ease: Sine.easeInOut }, '<')
      tl.fromTo(orbs[2], { scale: 1.2, rotate: '0deg', x: "-=3rem", y: "+=3rem" }, { scale: 1 , rotate: '180deg', x: "+=3rem", y: "-=6rem", repeat: -1, yoyo: true,  duration, ease: Sine.easeInOut }, '<')
      tl.yoyo(true);
    }, orbContainerRef.current);
    return () => context.revert(); 
  });

  return !children ? (
   <FloatingOrbContainer tw="overflow-clip" {...props}>
    <FloatingOrbBlurContainer />
    <div tw="relative flex justify-center items-center w-full sm:w-[100vw] sm:h-[100vh]" ref={orbContainerRef}>
      <div className="orb" tw="dark:bg-[#C836E0] 
      pointer-events-none
      blur-[75px] 
      absolute w-[350px] h-[350px] 
      rounded-[100%]
      translate-x-[5rem] translate-y-[5rem] z-[-27]"
      ></div>
      <div className="orb" tw="
      dark:bg-[#B80D57] 
      blur-[75px]
      pointer-events-none 
      absolute 
      w-[350px] 
      h-[350px] 
      rounded-[100%]
      translate-x-[-15rem] translate-y-[5rem] z-[-26]
      "></div>
      <div className="orb" tw="dark:bg-oranjo 
      pointer-events-none
      blur-[75px]
      absolute w-[350px] h-[350px] rounded-[100%] 
      translate-x-[15rem] translate-y-[-2.5rem] z-[-25]"></div>
    </div>
   </FloatingOrbContainer> 
  ) : <FloatingOrbContainer tw="relative w-full h-full" {...props}>
      <FloatingOrbBlurContainer tw="rounded-[inherit]"></FloatingOrbBlurContainer>
      <div tw="absolute flex justify-center items-center w-full h-full overflow-clip rounded-[inherit]" ref={orbContainerRef}>
        <div className="orb"
        tw="dark:bg-[#C836E0] 
        pointer-events-none 
        absolute w-[350px] h-[350px] 
        rounded-[100%]
        translate-x-[5rem] translate-y-[5rem] z-[-27]"
        ></div>
        <div className="orb" tw="
        dark:bg-[#B80D57] 
        pointer-events-none 
        absolute 
        w-[350px] 
        h-[350px] 
        rounded-[100%]
        translate-x-[-15rem] translate-y-[5rem] z-[-26]
        "></div>
        <div className="orb" tw="
        dark:bg-oranjo 
        pointer-events-none 
        absolute w-[350px] h-[350px] rounded-[100%] 
        translate-x-[15rem] translate-y-[-2.5rem] z-[-25]"></div>
      </div>
      {children}
    </FloatingOrbContainer>
   }

