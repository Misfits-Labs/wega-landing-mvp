import { useRef, useLayoutEffect } from 'react';
import { FloatingOrbContainer, FloatingOrbBlurContainer } from '../FloatingOrbs/types';
import { gsap, Linear } from 'gsap';
import "twin.macro"
// interface FloatingOrbsProps {} 
interface HoveringOrbsProps extends React.AllHTMLAttributes<HTMLDivElement>, React.Attributes {
 isHovering: number;
}
const HoveringOrbs: React.FC<HoveringOrbsProps> = ({ children, isHovering, ...props}: HoveringOrbsProps) => {
  // const orbContainerRef = useRef<any>(null);
  const background = useRef<any>();
  useLayoutEffect(()=> {
    const banner = background.current.querySelectorAll('.orb');
    const start = 0;
    const end = 1000;
    if(isHovering) {
      gsap.to([...banner], {  duration: 0.5, x: end - 200, ease: Linear.easeInOut});
    } else { 
      gsap.to([...banner], {  duration: 0.5, x: start, ease: Linear.easeInOut });
    }
    const context = gsap.context(() => {
     gsap.to(banner[0], { y: "-2rem", scale: 0.95, duration: 2, stagger: 0.2, yoyo: true, repeat: -1, ease: Linear.easeInOut })
     gsap.to(banner[1], { y: "2rem", scale: 1.2, duration: 2, stagger: 0.2, yoyo: true, repeat: -1, ease: Linear.easeInOut })
     gsap.to(banner[2], { y: "-2rem", scale: 0.7, duration: 2, stagger: 0.2, yoyo: true, repeat: -1, ease: Linear.easeInOut })
    }, background.current)
    return () => context.revert(); 
  }, [isHovering]);
  
  return !children ? (
   <FloatingOrbContainer {...props}>
    <FloatingOrbBlurContainer ></FloatingOrbBlurContainer>
    <div tw="relative flex justify-center items-center w-full sm:w-[100vw] sm:h-[100vh]" ref={background}>
      <div className="orb" tw="dark:bg-[#C836E0] 
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
      <div className="orb" tw="dark:bg-oranjo 
      pointer-events-none
      absolute w-[350px] h-[350px] rounded-[100%] 
      translate-x-[15rem] translate-y-[-2.5rem] z-[-25]"></div>
    </div>
   </FloatingOrbContainer> 
  ) : <FloatingOrbContainer tw="relative w-full h-full overflow-clip" {...props}>
      <FloatingOrbBlurContainer tw="rounded-[inherit]"></FloatingOrbBlurContainer>
      <div tw="absolute left-[-10rem] flex justify-center items-start w-full h-full rounded-[inherit]" ref={background}>
        <div className="orb"
        tw="dark:bg-[#C836E0] 
        pointer-events-none 
        absolute w-[350px] h-[350px]
        blur-[75px]
        left-[12rem]
        rounded-[100%]
        z-[-27]"
        ></div>
        <div className="orb" tw="
        dark:bg-[#B80D57] 
        pointer-events-none 
        absolute 
        blur-[75px]
        w-[350px] 
        h-[350px] 
        rounded-[100%]
        left-[9rem] z-[-26]
        "></div>
        <div className="orb" tw="
        dark:bg-oranjo 
        pointer-events-none
        blur-[75px] 
        absolute w-[350px] h-[350px] rounded-[100%] 
        left-[3rem] z-[-25]"></div>
      </div>
      {children}
    </FloatingOrbContainer>
   }

export default HoveringOrbs;