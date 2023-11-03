import { useLayoutEffect } from 'react'
import { gsap, Expo } from 'gsap';
import { useLocation } from 'react-router-dom';

export function useScrollTo() {
    const { hash } = useLocation();

    const scrollTo = (section: string) => {
      const tw = gsap.to(window, { duration: 1, ease: Expo.easeInOut, scrollTo: section, paused: true });
      tw.play()
    };
    
    useLayoutEffect(() => {
      if (hash) {
        scrollTo(hash);
      }
    }, [hash]);

    return { scrollTo };
} 

