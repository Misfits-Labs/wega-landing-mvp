import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitleLarge, SectionHeader  } from "../../common/Section/types"
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
          <SectionHeaderContainer tw="flex-col items-center mb-[48px]">
          <SectionHeaderTitleLarge tw="max-w-[803px] font-primary leading-[68px]">
            {"Your NFTs’ Favourite Playground"}<span tw="text-oranjo">.</span>
            </SectionHeaderTitleLarge>
            <SectionHeader tw="w-full break-words text-center text-[#D9D9D9]">Play multiple P2P betting games with your NFTs.</SectionHeader>
          </SectionHeaderContainer>
        }>
          <LandingPageHero />
      </Section>
    </>
 )
}
export default LandingPageHeroSection;