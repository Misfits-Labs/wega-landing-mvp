import tw, { styled } from 'twin.macro'; 

export const NormalText = styled.span`
 ${tw`font-primary font-normal text-[16px] sm:text-[21px] leading-[15px] sm:leading-[19px]`}
 font-style: normal;
`

export const LargeText = styled.span`
 ${tw`font-primary font-semibold sm:font-medium text-[21px] sm:text-[32px] leading-[19px] sm:leading-[32px]`}
 font-style: normal;
 `
export const ExtraLargeText = styled.span`
 font-family: League Spartan;
 font-size: 38px;
 font-style: normal;
 font-weight: 600;
 line-height: 35px;
`

export const MediumText = styled.span`
leading-trim: both;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 12px;
`

export const SmallText = styled.span`
 font-size: 12px;
 font-style: normal;
 font-weight: 300;
 line-height: 9px; 
`
