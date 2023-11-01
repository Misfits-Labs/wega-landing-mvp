import { useRef } from 'react';
import Section from "../../common/Section"
import { ArrowTrSquareIcon } from '../../assets/icons'
import GradientBannerWithOrbAnimation from '../GradientBannerWithOrbAnimation'
import { 
  SectionHeaderContainer, 
  SectionHeaderTitle, 
  SectionHeaderSubtitle 
} from "../../common/Section/types";
import {
  NormalText, 
  LargeText,
  MediumText
} from '../../common/typography/types'
import OwnTheYardGraphic from '../../assets/images/OwnTheYardGraphic';
import { useOrbFollow } from "../../hooks";
import 'twin.macro';

const LandingPageOwnTheYardSection = () => {
  const addBackgrounds = useOrbFollow();
  const ownTheardGraphicTriggerRef = useRef<any>();
  return (
  <Section
   direction='col'
   hdr={
    <SectionHeaderContainer tw="flex-col justify-center items-center">
     <SectionHeaderTitle>
      Play Hard, Own the Yard
      </SectionHeaderTitle>
      <SectionHeaderSubtitle>Play, earn, claim badges. Receive ownership and earn endless rewards.</SectionHeaderSubtitle>
     </SectionHeaderContainer>
   }>
   <div tw='self-center' ref={ownTheardGraphicTriggerRef} >
    <OwnTheYardGraphic ref={ownTheardGraphicTriggerRef} />
   </div>
   {/* gradient banner */}
   <div tw="relative h-[102px] z-auto">
    <GradientBannerWithOrbAnimation tw="absolute w-full h-full z-[-50] rounded-[25px]" ref={addBackgrounds} svgProps={{ 
        width:"100%", 
        radius: "25px",
        }
    }/>

    <div tw="relative w-full h-full flex flex-row gap-x-[10px] items-center justify-center px-[35px] rounded-[25px]">
      <div tw="flex flex-col rounded-[25px]">
        <LargeText>Powered by Wega Protocol</LargeText>
        <NormalText tw="text-[21px] leading-[19px] text-blanc">The leading NFT betting protocol aimed at expanding NFT use cases across different platforms.</NormalText>
      </div>
      <div tw="h-full flex items-center">
        <a tw="mt-[5px] border border-[2px] border-blanc rounded-[5px] flex block gap-x-[10px] py-[12px] px-[24px]" href="https://wega.gitbook.io/wega-litepaper/" target="_blank" rel="noreferrer">
          <MediumText tw="leading-[15px] font-bold tracking-[0.28px]">Learn more</MediumText>
          <ArrowTrSquareIcon />
        </a>
      </div>
    </div> {/** content-box */} 
   </div>
   
  </Section>
 )
}
export default LandingPageOwnTheYardSection;