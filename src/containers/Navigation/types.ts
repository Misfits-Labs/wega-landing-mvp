import tw, { styled } from 'twin.macro';
import { rgba } from 'polished';


export const BrandContainer = styled.div`
 display: flex;
 align-items: end;
 box-sizing: border-box;
 > li:first-child img {
  width: 24px;
 }

`

export const Brand = styled.div`
 font-weight: 700;
 font-size: 32px;
 line-height: 0.8;
 &:focus, &:hover {
  unset;
 }
//  span {
//   ${tw`text-shinishi dark:text-shinishi`}
//   font-weight: 400;
//   font-size: 21px;
//   line-height: 19px;
//   text-align: center;
//   margin-left: toRem(10, $font-base);
//  }
`

export const NavigationLinksContainer = styled.div`
  box-sizing: border-box;
`

export const NavigationConnectButton = styled.button`
 ${
  tw`
  text-pretu 
  bg-gradient-to-r from-oranjo-blanc to-oranjo
  text-base
  `
 }
 font-style: normal;
 font-weight: 700; 
 padding: 10px 25px;
 border-radius: 5px;
 max-width: fit-content;
`

export const NavigationBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: transform 500ms ease-out 100ms;

  &.nav-show {
    transform: initial;
    &::after {
      opacity: 0.95;
    }
    &::before {
      opacity: 0.85;
    }
  }

  &.nav-hide {
    transform: translateY(-100%);
  }
`
