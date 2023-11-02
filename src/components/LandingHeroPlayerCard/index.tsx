import WalletAvatar from "../../common/WalletAvatar";
import leftAvatarSource from  '../../assets/images/hero-left-player-image.png';
import rightAvatarSource from  '../../assets/images/hero-right-player-image.png';
import leftWidget from  '../../assets/images/hero-left-widget.png';
import rightWidget from  '../../assets/images/hero-right-widget.png';

import { 
  PlayerCardContainer, 
  PlayerAvatarWrapper,
} from './types';
import { NormalText, SmallText } from '../../common/typography/types'

import 'twin.macro';

export const LeftPlayerCard = () => {
  return  (
    <PlayerCardContainer tw="gap-y-[16.5px]">
      <PlayerAvatarWrapper tw="flex items-center justify-start gap-x-[15px] w-full">
        <WalletAvatar
          address={'0x00000000000000000'} 
          ensImage={leftAvatarSource}
          size={26.5} 
        />
        <NormalText>vitalik.eth</NormalText>
      </PlayerAvatarWrapper>
      <div tw="flex flex-col gap-y-[16px] items-center w-full">
        <NormalText tw="text-shinishi text-left w-full">Wager: </NormalText>
        <div tw="w-full border border-[1.6px] border-shinishi rounded-[7.1px] p-[7.1px]">
          <img src={leftWidget} alt="left-wager"/>
        </div>
      </div>
      <SmallText tw="text-blanc text-left w-full font-light leading-[7.5px]">Launch the app to start</SmallText>
    </PlayerCardContainer>
  )
}

export const RightPlayerCard = () => {
  return  (
    <PlayerCardContainer tw="gap-y-[16.5px]">
      <PlayerAvatarWrapper tw="flex items-center justify-start gap-x-[15px] w-full">
        <WalletAvatar
          address={'0x00000000000000000'} 
          ensImage={rightAvatarSource}
          size={26.5} 
        />
        <NormalText>0000.eth</NormalText>
      </PlayerAvatarWrapper>
      <div tw="flex flex-col gap-y-[16px] items-center w-full">
        <NormalText tw="text-shinishi text-left w-full">Wager: </NormalText>
        <div tw="w-full border border-[1.6px] border-shinishi rounded-[7.1px] p-[7.1px]">
          <img src={rightWidget} alt="right-wager"/>
        </div>
      </div>
      <SmallText tw="text-blanc text-left w-full font-light leading-[7.5px]">Awaiting opponent</SmallText>
    </PlayerCardContainer>
  )
}
