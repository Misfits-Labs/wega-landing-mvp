import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitleLarge  } from "../../common/Section/types"
import { FloatingOrbs } from '../../common/FloatingOrbs';
import LandingPageHero from '../LandingPageHero';
import 'twin.macro';

const LandingPageHeroSection = () => {
  return (
    <>
      <FloatingOrbs tw="translate-y-[-32%] flex justify-center items-center" />
        <Section
        direction='col'
        tw="relative"
        hdr={
          <SectionHeaderContainer tw="flex-col items-center ">
          <SectionHeaderTitleLarge tw="max-w-[803px] font-primary leading-[68px]">
            {"Your NFTs’ Favourite Playground"}<span tw="text-oranjo">.</span>
            </SectionHeaderTitleLarge>
          </SectionHeaderContainer>
        }>
          <LandingPageHero />
      </Section>
    </>
 )
}
export default LandingPageHeroSection;