import tw, { styled } from 'twin.macro';

export interface SectionContainerProps {
 direction: 'row' | 'col',
 reverse?: boolean;
}

export const SectionContainer = styled.section<SectionContainerProps>(({ direction , reverse }) => {
 switch(direction) {
  case 'col': 
   return reverse ? [tw`flex flex-col-reverse`] : [tw`flex flex-col`]   
  default: 
   return reverse ? [tw`flex flex-row-reverse`] : [tw`flex flex-row`]   
 }
})

export const SectionHeader = styled.span`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-family: League Spartan;
`
export const SectionHeaderSubtitle = styled.span`
  ${tw`font-primary text-start sm:text-center text-[21px] leading-[19px]`}
  font-style: normal;
  font-weight: 400;
`

export const SectionHeaderTitleLarge = styled.span`
  --font-size: 67px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  font-size: var(--font-size);
  line-height: calc(var(--font-size) * 1.5);
  justify-content: center;
`
export const SectionHeaderContainer = styled.div`
  ${tw`font-normal w-full flex flex-col items-start sm:items-center justify-center h-[max-content] gap-y-[16px] sm:gap-y-[24px]`}
`
export const SectionHeaderTitle = styled.span`
  ${tw`text-[38px] sm:text-[51px] leading-[35px] sm:leading-[47px] text-left sm:text-center`}
  font-style: normal;
  font-weight: 600;
  justify-content: center;`