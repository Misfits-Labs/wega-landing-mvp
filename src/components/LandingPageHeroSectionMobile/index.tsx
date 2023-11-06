import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitleLarge, SectionHeader  } from "../../common/Section/types"
import { FloatingOrbs } from '../../common/FloatingOrbs';
import 'twin.macro';
import LandingPageHeroMobile from "../LandingPageHeroMobile";

const LandingPageHeroSectionMobile = () => {
  return (
    <>
      <FloatingOrbs tw="translate-y-[-40%] flex justify-center items-center overflow-x-hidden"/>
        <Section
        direction='col'
        tw="relative w-full"
        hdr={
          <SectionHeaderContainer tw="flex-col items-center gap-y-[32px] mb-[unset]">
            <SectionHeaderTitleLarge tw="text-start font-primary leading-[68px] pb-[unset]">
            {"Your NFTs’ Playground"}<span tw="text-oranjo">.</span>
            </SectionHeaderTitleLarge>
            <SectionHeader tw="w-full break-words text-start text-[#D9D9D9]">Play multiple P2P betting games with your NFTs.</SectionHeader>
          </SectionHeaderContainer>
        }>
          <LandingPageHeroMobile />
      </Section>
    </>
 )
}
export default LandingPageHeroSectionMobile;