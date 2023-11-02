import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitle } from "../../common/Section/types";
import { LargeText, NormalText } from "../../common/typography/types";
import { OrIcon } from '../../assets/images'
import wagerTypeSource from '../../assets/images/wager-types.png'
import wagerCurrenciesSource from '../../assets/images/wager-currencies.png'
import 'twin.macro';
const LandingPageWagerTypeSection = () => {
 return (
  <Section
   direction='col'
   tw="mt-[10rem]"
   hdr={
    <SectionHeaderContainer tw="flex-col justify-center items-center mb-[67px]">
     <SectionHeaderTitle>
      Every Asset can sit at this table
      </SectionHeaderTitle>
     </SectionHeaderContainer>
   }>
   <div tw='flex flex-col md:flex-row gap-[54px] h-[370px] justify-center items-center '>
    <div tw='flex flex-col items-center gap-[24px] h-full w-[50%]'>
      <div tw='w-full flex items-center justify-around mb-[-60px] md:mb-0'>
       <img src={wagerCurrenciesSource} alt="wager currencies"/>
      </div>
      <div tw="flex flex-col gap-y-[16px] items-center">
       <LargeText>Tokens</LargeText>
       <NormalText tw="leading-[19px] text-[21px]" >Place a bet using approved tokens</NormalText>
      </div>
     </div>
     <OrIcon tw='w-[66px] h-[47.343px]' />
     <div tw='flex flex-col items-center gap-[24px] h-full w-[50%]'>
      <div tw='w-full flex items-center justify-center'>
       <img src={wagerTypeSource} alt="wager types"/>
      </div>
      <div tw="flex flex-col gap-y-[16px] items-center">
       <LargeText>Digital collectables</LargeText>
       <NormalText tw="leading-[19px] text-[21px]" >Use your NFT or play with fractions</NormalText>
      </div>
     </div>
   </div>
  </Section>
 )
}
export default LandingPageWagerTypeSection;