import { useRef } from 'react';
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
  const triggerDice = useRoll(diceRef);
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
        <PlayGameContainer tw="flex flex-col gap-[20.66px]">
          <div tw="flex gap-x-[20.657px] items-center justify-center">
            <LeftPlayerCard />
            <Dice diceRef={diceRef} />
            <RightPlayerCard />
          </div>
            <Button buttonType="primary" tw="font-secondary py-[9.92px] px-[19.83px] min-w-[162px] min-h-[35px]" onClick={() => triggerDice()}>
              Roll
            </Button>
          {/* <Link to="http://35.208.209.92:8080/#/">
          </Link> */}
        </PlayGameContainer>
        <SectionHeader tw="w-full text-center pt-[32px]">Play multiple P2P betting games with your NFTs.</SectionHeader>
      </Section>
    </>
 )
}
export default LandingPageHeroSection;