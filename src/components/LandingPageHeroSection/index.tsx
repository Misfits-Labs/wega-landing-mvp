import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitleLarge, SectionHeader  } from "../../common/Section/types"
import { PlayGameContainer } from './types'
import { LeftPlayerCard, RightPlayerCard } from '../LandingHeroPlayerCard';
import { FloatingOrbs } from '../../common/FloatingOrbs';
import Button from "../Button";
import { Dice } from "../Dice";
import { useRoll } from "../Dice/animations";
import 'twin.macro';

const LandingPageHeroSection = () => {
 const diceRef = useRef<any>(null);
 useRoll(diceRef);
 return (
    <FloatingOrbs tw="mt-[-5rem] w-full h-[100vh] flex justify-center">
      <Section
      direction='col'
      tw="relative"
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
      <Link to="http://35.208.209.92:8080/#/">
        <Button buttonType="primary" tw="flex justify-center items-center">
          Play Beta
        </Button>
      </Link>
      </PlayGameContainer>
      <SectionHeader tw="w-full text-center pt-[32px]">Play multiple P2P betting games with your NFTs.</SectionHeader>
      </Section>
    </FloatingOrbs>
 )
}
export default LandingPageHeroSection;