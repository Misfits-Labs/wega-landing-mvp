import { SVGProps, useRef, useLayoutEffect }  from "react";
import GradientBannerSVG from '../../assets/images/GradientBannerSVG';
import { gsap, Power4 } from 'gsap';
import 'twin.macro';

type GradientBannerWithOrbAnimationProps = {
    isHovering: number;
    svgProps: SVGProps<SVGSVGElement>
}
const GradientBannerWithOrbAnimation = ({ isHovering, svgProps, ...props }:  GradientBannerWithOrbAnimationProps & React.Attributes & React.AllHTMLAttributes<HTMLDivElement>) => {
  const background = useRef<any>();
  useLayoutEffect(()=> {
    const ctx = gsap.context(() => {
      const banner = background.current.querySelector('#orbs');
      const bannerPositionX = banner.getBoundingClientRect().x;
      const start = 0;
      const end = 1000;  
      const tl = gsap.timeline();
      if(isHovering) {
        tl.fromTo(banner, {
          duration: 2,
          repeatDelay: 1,
          x: bannerPositionX,
          ease: Power4.easeOut,
        }, { x: end });
      } else { 
        tl.fromTo(banner, {
          duration: 2,
          repeatDelay: 1,
          x: bannerPositionX,
          ease: Power4.easeIn,
        }, { x: start });
      }
    }, background.current)
    return () => ctx.revert();
  })
  return (
    <div {...props} ref={background} >
      <GradientBannerSVG {...svgProps} />
    </div>
  )
}

export default GradientBannerWithOrbAnimation;
