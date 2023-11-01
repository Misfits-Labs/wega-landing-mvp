import { SVGProps, useRef, forwardRef, useImperativeHandle }  from "react";
import GradientBannerSVG from '../../assets/images/GradientBannerSVG';
import { gsap } from 'gsap';
import 'twin.macro';

type GradientBannerWithOrbAnimationProps = {
    delay?: number;
    speed?: number;
    svgProps: SVGProps<SVGSVGElement>
}
const GradientBannerWithOrbAnimation = forwardRef(({ delay, svgProps, ...props }:  GradientBannerWithOrbAnimationProps & React.Attributes & React.AllHTMLAttributes<HTMLDivElement>, ref) => {
    
    const background = useRef<any>()
  
    // returns api for animating orb
    useImperativeHandle(ref, () =>{
        return {
            moveTo(x: number) {
              gsap.to('g#gradient-banner-background #orbs', { x });
            },
        }
    }, [ delay ])    

    
    return (
      <div {...props} ref={background} >
        <GradientBannerSVG {...svgProps} />
      </div>
    )
})

export default GradientBannerWithOrbAnimation;
