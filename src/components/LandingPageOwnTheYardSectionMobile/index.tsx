import Section from "../../common/Section"
import { ArrowTrSquareIcon } from '../../assets/icons'
import { 
  SectionHeaderContainer, 
  SectionHeaderTitle, 
  SectionHeaderSubtitle 
} from "../../common/Section/types";
import { FloatingOrbs } from '../../common/FloatingOrbs';
import {
  NormalText, 
  LargeText,
  MediumText
} from '../../common/typography/types'
import OwnTheYardGraphic from '../../assets/images/OwnTheYardGraphicMobile';
import 'twin.macro';

  
  

const LandingPageOwnTheYardSectionMobile = () => {
  
  return (
  <Section
   direction='col'
   tw="relative px-5 w-full mt-[7.5rem] sm:mt-[16rem] gap-y-[54px] z-[10]"
   hdr={
    <SectionHeaderContainer tw="flex-col justify-center items-center">
     <SectionHeaderTitle tw="text-center">
      Play Hard, Own the Yard
      </SectionHeaderTitle>
      <SectionHeaderSubtitle tw="text-center w-[291px] break-words">Play, earn, claim and receive rewards & ownership</SectionHeaderSubtitle> 
     </SectionHeaderContainer>
   }>
   <div tw='self-center w-full' >
    <OwnTheYardGraphic width="100%" />
   </div>
   {/* gradient banner */}
   <div tw="relative rounded-[25px] h-[217px] border-[2px] border-blanc z-[inherit]">
    <FloatingOrbs tw="rounded-[inherit] p-[20px]">
     <div tw="relative w-full flex flex-col rounded-[inherit]">
       <div tw="flex flex-col gap-y-[24px]">
         <LargeText tw="text-left">Powered by Wega Protocol</LargeText>
         <NormalText tw="text-left break-words">The leading NFT betting protocol aimed at expanding NFT use cases.</NormalText>
       </div>
       <div tw="relative z-[inherit] h-full w-full flex items-center justify-center mt-[32px]">
         <a tw="w-full flex justify-center border border-[2px] border-blanc rounded-[5px] flex block gap-x-[10px] py-[12px] px-[24px]" href="https://wega.gitbook.io/wega-litepaper/" target="_blank" rel="noreferrer">
           <MediumText tw="leading-[15px] font-bold tracking-[0.28px]">Learn more</MediumText>
           <ArrowTrSquareIcon />
         </a>
       </div>
     </div> 
    </FloatingOrbs>
   </div>
  </Section>
 )
}
export default LandingPageOwnTheYardSectionMobile;