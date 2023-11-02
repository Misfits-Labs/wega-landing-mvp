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
    } else { 
      gsap.to(banner, { duration: 0.5, x: start, ease: Linear.easeInOut });
    }
  }, [isHovering])
  return (
    <div {...props} ref={background} >
      <GradientBannerSVG {...svgProps} />
    </div>
  )
}

export default GradientBannerWithOrbAnimation;
