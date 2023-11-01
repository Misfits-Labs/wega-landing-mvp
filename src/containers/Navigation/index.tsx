/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { LogoDarkWo } from '../../assets/images';
import { 
  BrandContainer, 
  Brand, 
  NavigationLinksContainer,
  NavigationBar
} from './types';
import Button from '../../common/Button';
import { useAnimateNav } from '../../hooks';
import 'twin.macro'

const Navigation = () => {
  useAnimateNav();
  return (
    <NavigationBar className="fixed w-full top-0 font-primary">
      <div tw="relative z-[inherit] container dark:text-blanc flex w-full py-[20px] px-[20px] justify-center items-end">
        <NavigationLinksContainer tw="box-border flex w-full gap-x-[30px]">
          <BrandContainer tw="mb-[4px]">
            <div tw="mr-5">
              <Link to="/"><LogoDarkWo /></Link>
            </div>
            <Brand><Link to="/">Wega</Link></Brand>
          </BrandContainer>
        </NavigationLinksContainer>
        <div>
        <Link to="http://35.208.209.92:8080/#/">
          <Button buttonType="primary" tw="flex justify-center items-center w-[max-content]">
            Play Beta
          </Button>
        </Link>
        </div>
      </div>
    </NavigationBar>
  )
}
export default Navigation;

