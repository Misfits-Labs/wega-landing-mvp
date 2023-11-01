import { Link } from 'react-router-dom';
import { LogoDarkWo } from '../../assets/images';
import { TwitterIcon, GithubIcon, TelegramIcon,  } from '../../assets/icons';
import { Brand, BrandContainer } from '../Navigation/types';
import { NormalText } from '../../common/typography/types';
import 'twin.macro';

const Footer = () => {
  return (
    <footer tw="relative z-[0] w-full">
      {/* footer thingy */}

      <div tw="container dark:text-blanc mt-5 flex flex w-full py-[56px] font-primary gap-y-[16px] justify-between mt-[5rem]">
            <BrandContainer tw="mb-[4px]">
              <div tw="mr-5">
                <Link to="/"><LogoDarkWo /></Link>
              </div>
              <Brand><Link to="/">Wega</Link></Brand>
            </BrandContainer>
            <div tw="flex flex-col items-center">
              <NormalText tw="text-[21px] leading-[19px] text-[#D3D3D3] mb-[32px]">Join the playrooms</NormalText>
              <div tw="flex gap-x-[55px] w-full justify-center mb-[12rem]">
                <Link to="https://github.com/Misfits-Labs" target="_blank" tw="w-[44px]">
                  <GithubIcon width="100%" height="100%" />
                </Link>
                <Link to="https://twitter.com/PlayWega" target="_blank" tw="w-[44px]">
                  <TwitterIcon width="100%" height="100%" />
                </Link>
                <Link to="https://wega.gitbook.io/wega-litepaper/" target="_blank" tw="w-[44px]">
                  <TelegramIcon width="100%" height="100%" />
                </Link>
              </div>
              <NormalText tw="text-[21px] leading-[19px] text-blanc">Play together, Own together.</NormalText>
            </div>
            
            <div tw="flex gap-x-[30px] items-end">
              <Link to="https://wega.gitbook.io/wega-litepaper/" target="_blank">
                <NormalText>Documentation</NormalText>
              </Link>
              <Link to="http://35.208.209.92:8080/#/" target="_blank">
                <NormalText>Play Beta</NormalText>
              </Link>
            </div>
      </div> 
    </footer>
  )
}
export default Footer;