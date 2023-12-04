import { useRef } from 'react';
import { Dice } from "../Dice";
import { useAutoRoll } from "../Dice/animations";
import { LeftPlayerCardMobile, RightPlayerCardMobile} from "../LandingHeroPlayerCard";
import { Link } from 'react-router-dom';
import Button from "../Button";
import { VersusIcon } from '../../assets/icons';
import 'twin.macro';

const LandingPageHeroMobile = () => {
  const diceRef = useRef<any>(null);
  useAutoRoll(diceRef);
 
 return (
  <div tw="relative flex flex-col items-center mt-[85px]" >
   <VersusIcon tw="relative top-0 mt-[-3rem] mx-auto mb-[-1.5rem] z-[20]" />
   <div tw="relative flex gap-x-[8.5px] self-center z-[-19]">
    <LeftPlayerCardMobile />
    <RightPlayerCardMobile />
   </div>
   <Dice tw="rounded-[15px] w-[115px] h-[115px] p-[14px] border-[2.5px] mt-[-0.75rem]" diceRef={diceRef} />
   <Link to="https://app.wega.fun" target="_blank" rel="noreferrer">
    <Button buttonType="primary" tw="z-[-20] flex flex-row justify-center px-[24px] py-[12px] items-center mt-[5rem]" >
      Play
      {/* <BlackFillWrapperForSVG tw="ms-[8px]">
        <TwitterIcon width="16px" height="16px"/>
      </BlackFillWrapperForSVG> */}
    </Button>
   </Link>
  </div>
 )
}
export default  LandingPageHeroMobile;