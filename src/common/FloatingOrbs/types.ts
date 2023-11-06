import tw, {styled} from 'twin.macro';

export const FloatingOrbContainer = styled.div`
 ${tw`sm:mt-[-5rem] absolute top-0 right-0 w-full h-full z-[-51] flex justify-center items-center`}
`
export const FloatingOrbBlurContainer = styled.div`
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: inherit;
  top: 0;
  left: 0;
  ${tw`z-[-21] bg-pretu bg-opacity-[0.3]`}
  ${tw`backdrop-blur-[80px]`}
`