import tw, { styled } from 'twin.macro';


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
      opacity: 0.99;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    ${tw`bg-opacity-[0.99] bg-pretu z-[750] blur-[1rem] shadow-wega-nav`}
    opacity: 0;
    transition: all 500ms ease-out 60ms;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    ${tw`z-[745] blur-[10rem] bg-pretu`}
    transition: all 500ms ease-out 60ms;
  }
  &.nav-hide {
    transform: translateY(-100%);
  }
`
