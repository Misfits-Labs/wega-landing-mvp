import { useRef } from 'react';
import { Dice } from "../Dice";
import { useAutoRoll } from "../Dice/animations";
import { LeftPlayerCardMobile, RightPlayerCardMobile} from "../LandingHeroPlayerCard";
import Button from "../Button";

import { VersusIcon } from '../../assets/icons'; 
import 'twin.macro';

const LandingPageHeroMobile = () => {
  const diceRef = useRef<any>(null);
  useAutoRoll(diceRef);
 
 return (
  <div tw="relative flex flex-col items-center mt-[85px]" >
   <VersusIcon tw="relative top-0 mt-[-3rem] mx-auto mb-[-1.5rem] z-[20]" />
   <div tw="relative flex gap-x-[8.5px] self-center">
    <LeftPlayerCardMobile />
    <RightPlayerCardMobile />
   </div>
   <Dice tw="rounded-[15px] w-[115px] h-[115px] p-[14px] border-[2.5px] mt-[-0.75rem]" diceRef={diceRef} />
   <Button 
    buttonType="primary" tw="shadow-primary-button py-[9.92px] px-[19.83px] min-w-[162px] min-h-[35px] mt-[5rem]" >
        Coming soon
      </Button>
  </div>
 )
}
export default  LandingPageHeroMobile;