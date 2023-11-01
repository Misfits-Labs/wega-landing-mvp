import { useLayoutEffect, useRef, useState } from 'react';
export function useOrbFollow() {
    
    const orbs = useRef<any>([]);
    orbs.current = [];
    
    const addOrbRefs = (ref: any) => { if (ref) orbs.current.push(ref) } 

    useLayoutEffect(() => {
        // const { innerWidth, innerHeight } = window;        
        // orbs.current.forEach((ref: any) => ref.setBackground());
        
        const onMove = ({ clientX }: any) => {
            orbs.current.forEach((ref: any) => ref.moveTo(clientX / 1.7));
        };
        
        window.addEventListener("pointermove", onMove);
        
        return () => window.removeEventListener("pointermove", onMove);
    }, []);

    return addOrbRefs;
}

export function useOrbFollowInPlace() {
    
    const orbs = useRef<any>([]);
    const [appeared, setAppeared] = useState<boolean>();
    const [cX, setCX] = useState<number>();
    const [cY, setCY] = useState<number>();
    
    const addOrbRef = (ref: any) => { 
        if (ref) { 
            orbs.current.push(ref) } 
    } 

    orbs.current = [];
    useLayoutEffect(() => {
        const { innerWidth, innerHeight } = window;        
        
        if (!appeared) {
            orbs.current.forEach((ref: any) => ref.appear());
            setAppeared(true);
        }
        
        const onMove = (inp: any) => {
            orbs.current.forEach((ref: any) => ref.moveToInPlace(inp.clientX/innerWidth, inp.clientY/innerHeight));
            setCX(inp.clientX/innerWidth);
            setCY(inp.clientY/innerHeight);
        };
    
        orbs.current.forEach((ref: any) => ref.moveToInPlace(cX, cY));
        window.addEventListener("mousemove", onMove);
        return () => { 
            window.removeEventListener("mousemove", onMove); 
        }
    }, []);
    return addOrbRef;
}