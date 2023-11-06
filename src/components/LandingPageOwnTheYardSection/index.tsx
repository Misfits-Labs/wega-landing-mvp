import { useState } from "react"
import Section from "../../common/Section"
import { ArrowTrSquareIcon } from "../../assets/icons"
import {
 SectionHeaderContainer,
 SectionHeaderTitle,
 SectionHeaderSubtitle
} from "../../common/Section/types"
import { NormalText, LargeText, MediumText } from "../../common/typography/types"
import OwnTheYardGraphic from "../../assets/images/OwnTheYardGraphic";
import HoveringOrbs from "../../common/HoveringOrbs"
import "twin.macro"

const LandingPageOwnTheYardSection = () => {
 const [isHoveringOnGradientBackground, setIsHoveringOnGradientBackground] = useState<any>(null)
 const handleGradientBackgroundHover = (enterOrLeave: string) => {
  if (enterOrLeave == "enter") {
   setIsHoveringOnGradientBackground(true)
  } else {
   setIsHoveringOnGradientBackground(false)
  }
 }
 return (
  <Section
   direction="col"
   tw="px-5 w-full mt-[16rem] gap-y-[54px] overflow-x-hidden"
   hdr={
    <SectionHeaderContainer tw="flex-col justify-center items-center">
     <SectionHeaderTitle>Play Hard, Own the Yard</SectionHeaderTitle>
     <SectionHeaderSubtitle tw="mt-[24px]">
      Play, earn, claim badges. Receive ownership and earn endless rewards.
     </SectionHeaderSubtitle>
    </SectionHeaderContainer>
   }
  >
   <div tw="self-center mr-[7.5rem]">
    <OwnTheYardGraphic />
   </div>
   {/* gradient banner */}
   <HoveringOrbs
    isHovering={isHoveringOnGradientBackground}
    tw="relative h-[102px] w-[75%] self-center z-auto rounded-[25px]"
    onMouseEnter={() => handleGradientBackgroundHover("enter")}
    onMouseLeave={() => handleGradientBackgroundHover("leave")}
   >
    <div tw="border border-[2px] border-blanc relative w-full h-full flex flex-row items-center justify-center px-[35px] rounded-[25px]">
     <div tw="flex flex-col ">
      <LargeText>Powered by Wega Protocol</LargeText>
      <NormalText tw="text-[21px] leading-[19px] text-blanc">
       The leading NFT betting protocol aimed at expanding NFT use cases across different platforms.
      </NormalText>
     </div>
     <div tw="h-full flex items-center">
      <a
       tw="w-[max-content] mt-[5px] border border-[2px] border-blanc rounded-[5px] flex block gap-x-[10px] py-[12px] px-[24px]"
       href="https://wega.gitbook.io/wega-litepaper/"
       target="_blank"
       rel="noreferrer"
      >
       <MediumText tw="leading-[15px] font-bold tracking-[0.28px]">Learn more</MediumText>
       <ArrowTrSquareIcon />
      </a>
     </div>
    </div>
   </HoveringOrbs>
  </Section>
 )
}
export default LandingPageOwnTheYardSection
