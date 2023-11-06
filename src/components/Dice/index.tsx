import { SVGProps } from 'react';
import { DiceContainer } from './types';
import WegaDice from './images/WegaDice'; 
import "twin.macro";

type DiceProps = {
  diceRef: any;
  svgProps?: SVGProps<SVGSVGElement>;
} & React.Attributes & React.AllHTMLAttributes<HTMLDivElement>

export const Dice: React.FC<DiceProps> = ({ 
  diceRef,
  svgProps,
  ...props 
}: DiceProps) => {
  return (
    <DiceContainer { ...props }>
      <WegaDice ref={diceRef} { ...svgProps } />
    </DiceContainer>
  )
}

