import { useRef } from 'react';
import { PlayGameContainer } from "../LandingPageHeroSection/types";
import { Dice } from "../Dice";
import { useRoll, useAutoRoll } from "../Dice/animations";
import { LeftPlayerCard, RightPlayerCard } from "../LandingHeroPlayerCard";
import Button from "../Button";
import { SectionHeader } from '../../common/Section/types';
import 'twin.macro';

const LandingPageHero = () => {
 const diceRef = useRef<any>(null);
 const triggerDice = useRoll(diceRef);
 useAutoRoll(diceRef);
 
 return ( <>
    <PlayGameContainer tw="flex flex-col gap-[20.66px]">
    <div tw="flex gap-x-[20.657px] items-center justify-center"> 
      <LeftPlayerCard />
      <Dice diceRef={diceRef} />
      <RightPlayerCard />
    </div>
      <Button buttonType="primary" tw="py-[9.92px] px-[19.83px] min-w-[162px] min-h-[35px]" onClick={() => triggerDice()}>
        Roll
      </Button>
   </PlayGameContainer>
   <SectionHeader tw="w-full text-center pt-[32px]">Play multiple P2P betting games with your NFTs.</SectionHeader> </> ) 
}
export default  LandingPageHero;