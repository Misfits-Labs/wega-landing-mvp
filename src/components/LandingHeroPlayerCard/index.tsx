import WalletAvatar from "../../common/WalletAvatar";
import leftAvatarSource from  '../../assets/images/hero-left-player-image.png';
import rightAvatarSource from  '../../assets/images/hero-right-player-image.png';
import leftWidget from  '../../assets/images/hero-left-widget.png';
import rightWidget from  '../../assets/images/hero-right-widget.png';
import rightWidgetImage from  '../../assets/images/landing-hero-right-widget-mobile-image.png';
import leftWidgetImage from  '../../assets/images/landing-hero-left-widget-mobile-image.png';

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
      {/* <SmallText tw="text-blanc text-left w-full font-light leading-[7.5px]">Launch the app to start</SmallText> */}
    </PlayerCardContainer>
  )
}
export const LeftPlayerCardMobile = () => {
  return  (
    <PlayerCardContainer tw="flex flex-row justify-end  min-h-[unset] gap-x-[10px] p-[8px] rounded-[8px] border border-[1px] border-shinishi">
      <div tw="flex h-full flex-col gap-y-[10px] items-end justify-center w-[261.36px]">
        <NormalText tw="font-primary">#392</NormalText>
        <SmallText tw="font-primary">BAYC</SmallText>
        <NormalText tw="font-primary">38.1 ETH</NormalText>
        <SmallText tw="font-primary">(~73.00 USD)</SmallText>
      </div>  
      <img src={leftWidgetImage} alt="left-wager"/>
    </PlayerCardContainer>
  )
}
export const RightPlayerCardMobile = () => {
  return  (
    <PlayerCardContainer tw="flex flex-row justify-start min-h-[unset] gap-x-[10px] p-[8px] rounded-[8px] border border-[1px] border-shinishi">
      <img src={rightWidgetImage} alt="left-wager"/>
      <div tw="flex flex-col h-full gap-y-[10px] items-start justify-center w-[261.36px]">
        <NormalText tw="font-primary">#392</NormalText>
        <SmallText tw="font-primary">Noun</SmallText>
        <NormalText tw="font-primary">38.0 ETH</NormalText>
        <SmallText tw="font-primary">(~73.200 USD)</SmallText>
      </div>  
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
        <NormalText>Jared.eth</NormalText>
      </PlayerAvatarWrapper>
      <div tw="flex flex-col gap-y-[16px] items-center w-full">
        <NormalText tw="text-shinishi text-left w-full">Wager: </NormalText>
        <div tw="w-full border border-[1.6px] border-shinishi rounded-[7.1px] p-[7.1px]">
          <img src={rightWidget} alt="right-wager"/>
        </div>
      </div>
      {/* <SmallText tw="text-blanc text-left w-full font-light leading-[7.5px]">Awaiting opponent</SmallText> */}
    </PlayerCardContainer>
  )
}
