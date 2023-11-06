/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect, useRef } from 'react';
import {DeleteCircleIcon, HamburgerIcon} from '../../assets/icons';
import {Link} from 'react-router-dom';
import { 
 BrandContainer, 
 Brand, 
 NavigationLinksContainer,
 NavigationBar
} from '../Navigation/types';
import { NormalText } from '../../common/typography/types';
import { useHamburgerTween, useAnimateNav } from '../../hooks';
import 'twin.macro';

export const NavigationMobile = () => {
  const close = 1, open = 0;
  const mobileLinksContainerRef = useRef<any>(null);
  useAnimateNav(); // initiate nav animation
  const [burgerState, setBurgerState] = useState<number>(1);
  
  // const burgerRef = useRef<RefObject<any>>()
  const toggleBurger = useHamburgerTween(burgerState, mobileLinksContainerRef);

  const toggleNav = (e: any) => {
    e.preventDefault();
    setBurgerState(s => s == close ? open : close);
    toggleBurger();
  };

  useEffect(()=>{
   const bodyElement = document.getElementsByTagName('body')[0];
   const overLayElement = document.querySelector('#wega-overlay');
   const root = bodyElement.querySelector('#root');
   if(burgerState === open) {
    bodyElement.style['overflow-y' as any] = 'hidden';
    (overLayElement as any).style.display = 'block';
    (root as any).style.display = 'block';
    (root as any).style['overflow-y'] = 'hidden';

   } else {
    bodyElement.style['overflow-y' as any] = 'scroll';
    (overLayElement as any).style.display = 'none';
    (root as any).style['overflow-y'] = 'scroll';
   }
  })

  return (
   <>
    <NavigationBar tw="fixed font-primary z-[755]">
     <div tw="container dark:text-blanc flex items-center relative z-[inherit]">
       <NavigationLinksContainer tw="box-border flex w-full gap-x-[30px]">
         <BrandContainer tw="mb-[4px] py-[20px]">
           <Brand tw="font-[32px] font-semibold" ><Link to="/">Wega<span className="font-[32px] dark:text-oranjo">.</span></Link></Brand>
         </BrandContainer>
       </NavigationLinksContainer>
       <div tw="relative flex items-end w-[22px] z-[756]" onClick={toggleNav} ><HamburgerIcon /></div>
     </div>
   </NavigationBar>
   <div ref={mobileLinksContainerRef} tw="z-[800] fixed top-0 w-full flex flex-col items-center translate-y-[-25rem]">
     <div tw="relative flex flex-col mx-auto w-[385px] z-[inherit]">
      <div tw="relative border border-[2px] border-shinishi w-full h-full flex flex-col items-center z-[inherit] gap-y-[15px] pt-[10px] pt-[10px] pb-[20px] rounded-[5px]">
       <DeleteCircleIcon color={"#FDFDFD"} tw="self-end mr-[20px]" onClick={toggleNav} />
       <div tw="relative w-full h-full flex flex-col items-center z-[inherit] gap-y-[20px]">
        <Link to="https://wega.gitbook.io/wega-litepaper/" tw="w-full text-center"><NormalText tw="font-primary text-[21px] leading-[19px]">Docs</NormalText></Link>
        <Link to="https://twitter.com/PlayWega" tw="w-full text-center"><NormalText tw="font-primary text-[21px] leading-[19px]">X</NormalText></Link>
        <Link to="https://t.me/playwega" tw="w-full text-center"><NormalText tw="font-primary text-[21px] leading-[19px]">Telegram</NormalText></Link>
        <Link to="https://github.com/Misfits-Labs" tw="w-full text-center"><NormalText tw="font-primary text-[21px] leading-[19px]">Github</NormalText></Link>
        <Link to="https://app.wega.fun/3/" tw="w-full text-center"><NormalText tw="font-primary text-[21px] leading-[19px] text-transparent dark:bg-gradient-to-r from-oranjo-blanc to-oranjo  bg-clip-text">Play Beta</NormalText></Link>
       </div>
      </div>
      <div tw="absolute top-0 right-0 w-full h-full z-[795] transition-wega-nav backdrop-blur-[15px] backdrop-opacity-[1] rounded-[5px]">
     </div>
     </div>
   </div>
  </>
 );
};
