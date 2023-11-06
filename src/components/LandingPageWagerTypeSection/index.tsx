import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitle, SectionHeaderSubtitle } from "../../common/Section/types";
import { LargeText, NormalText } from "../../common/typography/types";
import { OrIcon } from '../../assets/images'
import wagerTypeSource from '../../assets/images/wager-types.png'
import wagerCurrenciesSource from '../../assets/images/wager-currencies.png'
import 'twin.macro';
const LandingPageWagerTypeSection = () => {
 return (
  <Section
   direction='col'
   tw="px-5 w-full mt-[10rem]"
   hdr={
    <SectionHeaderContainer tw="flex-col items-start sm:items-center justify-center mb-[67px]">
     <SectionHeaderTitle>
      Every Asset can sit at this table
      </SectionHeaderTitle>
      <SectionHeaderSubtitle tw="text-[#F1F1EF]">Use your NFTs as a ticket to your next big win</SectionHeaderSubtitle>
     </SectionHeaderContainer>
   }>
   <div tw='flex flex-col md:flex-row gap-[54px] sm:h-[370px] justify-center items-center'>
    <div tw='flex flex-col items-center gap-y-[54px] sm:gap-y-[24px] h-full sm:w-[50%]'>
      <div tw='w-full flex items-center justify-around md:mb-0'>
       <img src={wagerCurrenciesSource} alt="wager currencies"/>
      </div>
      <div tw="flex flex-col gap-y-[16px] items-center">
       <LargeText>Tokens</LargeText>
       <NormalText tw="text-[#F1F1EF]">Place a bet using approved tokens</NormalText>
      </div>
     </div>
     <OrIcon tw='w-[52.75px] sm:w-[66px] h-[37.5px] sm:h-[47.343px] my-[25px] sm:my-[unset]'/>
     <div tw='flex flex-col items-center gap-y-[54px] sm:gap-y-[24px] h-full sm:w-[50%]'>
      <div tw='w-full flex items-center justify-center'>
       <img src={wagerTypeSource} alt="wager types"/>
      </div>
      <div tw="flex flex-col gap-y-[16px] items-center">
       <LargeText>Digital collectables</LargeText>
       <NormalText tw="text-[#F1F1EF]">Use your NFT or play with fractions</NormalText>
      </div>
     </div>
   </div>
  </Section>
 )
}
export default LandingPageWagerTypeSection;