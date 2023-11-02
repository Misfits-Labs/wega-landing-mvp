/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { LogoDarkWo } from '../../assets/images';
import { 
  BrandContainer, 
  Brand, 
  NavigationLinksContainer,
  NavigationBar
} from './types';
import { useAnimateNav } from '../../hooks';
import 'twin.macro'

const Navigation = () => {
  useAnimateNav();
  return (
    <NavigationBar tw="font-primary">
      <div tw="relative z-[995] container dark:text-blanc flex w-full py-[20px] px-[20px] justify-center items-end">
        <NavigationLinksContainer tw="box-border flex w-full gap-x-[30px]">
          <BrandContainer tw="mb-[4px]">
            <div tw="mr-5">
              <Link to="/"><LogoDarkWo /></Link>
            </div>
            <Brand><Link to="/">Wega</Link></Brand>
          </BrandContainer>
        </NavigationLinksContainer>
        <div>
        {/* <Link to="http://35.208.209.92:8080/#/">
          <Button buttonType="primary" tw="flex justify-center items-center w-[max-content]">
            Play Beta
          </Button>
        </Link> */}
        </div>
      </div>
    <div tw="absolute top-0 right-0 w-full h-full opacity-[0.85] bg-pretu z-[750] shadow-wega-nav transition-wega-nav shadow-inner"></div> {/** box-shadow container */}
    <div tw="absolute top-0 right-0 w-full h-full z-[745] transition-wega-nav backdrop-blur-[20rem] backdrop-opacity-[0.97]"></div>
    </NavigationBar>
  )
}
export default Navigation;

