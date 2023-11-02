import tw, { styled } from "twin.macro";

export const PlayGameContainer = styled.div`
 ${tw`relative z-10 flex flex-col justify-center items-center gap-[20.66px] rounded-[20px]`}
 ${tw`min-w-[780px] px-[24.788px] pt-[41.314px] pb-[24.788px]`}
 ${tw`border border-[2.479px] dark:border-[#8A8A8A]`}
 background: linear-gradient(137deg, #282828 0%, rgba(40, 40, 40, 0.00) 100%);
 
 &::before {
  content: '';
  border-radius: 20px;
  border: 3px solid #8A8A8A;
  position: absolute;
  width: inherit;
  height: inherit;
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  z-index: -5;
 }
`