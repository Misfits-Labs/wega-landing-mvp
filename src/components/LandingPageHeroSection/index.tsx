import { useRef } from 'react';
import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitleLarge, SectionHeader  } from "../../common/Section/types"
import { PlayGameContainer } from './types'
import { LeftPlayerCard, RightPlayerCard } from '../LandingHeroPlayerCard';
import Button from "../Button";
import { Dice } from "../Dice";
import { useRoll } from "../Dice/animations";
import 'twin.macro';

const LandingPageHeroSection = () => {
 const diceRef = useRef<any>(null);
 useRoll(diceRef);
 return (
  <Section
   direction='col'
   hdr={
    <SectionHeaderContainer tw="flex-col items-center">
     <SectionHeaderTitleLarge>
      {"NFTs' Playground"}<span tw="text-oranjo">.</span>
      </SectionHeaderTitleLarge>
     </SectionHeaderContainer>
   }>
   <PlayGameContainer>
   <div tw="flex gap-x-[25px] items-center justify-center">
     <LeftPlayerCard />
     <Dice diceRef={diceRef} />
     <RightPlayerCard />
   </div>
   <Button buttonType="primary" tw="w-[25%] flex justify-center items-center">
    <a href="http://35.208.209.92:8080/#/" target="_blank" rel="noreferrer">Play Beta</a>
   </Button>
   </PlayGameContainer>
   <SectionHeader tw="w-full text-center pt-[32px]">Play multiple P2P betting games with your NFTs.</SectionHeader>
  </Section>
 )
}
export default LandingPageHeroSection;