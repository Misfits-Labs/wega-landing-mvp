import { SVGProps, useRef, useLayoutEffect }  from "react";
import GradientBannerSVG from '../../assets/images/GradientBannerSVG';
import { gsap, Linear } from 'gsap';
import 'twin.macro';

type GradientBannerWithOrbAnimationProps = {
    isHovering: number;
    svgProps: SVGProps<SVGSVGElement>
}
const GradientBannerWithOrbAnimation = ({ isHovering, svgProps, ...props }:  GradientBannerWithOrbAnimationProps & React.Attributes & React.AllHTMLAttributes<HTMLDivElement>) => {
  const background = useRef<any>();
  useLayoutEffect(()=> {
    const banner = background.current.querySelector('#orbs');
    const start = 0;
    const end = 1000;
    if(isHovering) {
      gsap.to(banner, { duration: 0.5, x: end, ease: Linear.easeInOut });
      const context = gsap.context(() => {
      }, background.current)
      return () => context.revert();
    } else { 
      gsap.to(banner, { duration: 0.5, x: start, ease: Linear.easeInOut });
    }
  }, [isHovering]);
  

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const banner = background.current.querySelector('#orbs');
  //     const orbs = banner.querySelectorAll('#orbs > g');
  //     const tl = gsap.timeline();
  //     const duration = 5;
  //     if(isHovering){
  //       tl.to([...orbs], { x: "10px", y: '10px',  stagger: 0.3, duration, yoyo: true, repeat: -1, ease: Sine.easeInOut })    
  //     }
  //   }, background.current);
  //   return () => context.revert(); 
  // });

  return (
    <div {...props} ref={background} >
      <GradientBannerSVG {...svgProps} />
    </div>
  )
}

export default GradientBannerWithOrbAnimation;

