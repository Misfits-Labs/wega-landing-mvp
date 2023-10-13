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
import tw, { css } from 'twin.macro';
import LaunchButton from '../../components/LaunchGameButton';

const Navigation = () => {
  useAnimateNav();

  return (
    <NavigationBar className="fixed w-full top-0 font-primary overflow-hidden md:max-w-[100%]">
      <div tw="container dark:text-blanc flex w-full py-[20px] px-[20px] justify-center items-end ">
        <NavigationLinksContainer tw="box-border flex w-full gap-x-[30px]">
          <BrandContainer tw="mb-[4px]">
            <div tw="mr-5">
              <Link to="/"><LogoDarkWo /></Link>
            </div>
            <Brand><Link to="/">Wega</Link></Brand>
          </BrandContainer>
        </NavigationLinksContainer>
        <div>
          <LaunchButton />
        </div>
      </div>
    </NavigationBar>
  )
}

export default Navigation;

