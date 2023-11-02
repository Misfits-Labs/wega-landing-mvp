/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { LogoDarkWo } from '../../assets/images';
import { TwitterIcon, GithubIcon, WhitepaperIcon  } from '../../assets/icons';
import { Brand, BrandContainer } from '../Navigation/types';
import { NormalText } from '../../common/typography/types';
import tw, { css} from 'twin.macro';

const Footer = () => {
  const hoverStrokeOranjoStyle = css`
    &:hover svg path {
      border-color: black;
      ${tw`stroke-oranjo`}
    }
  `
  const hoverFillOranjoStyle = css`
    &:hover svg path {
      border-color: black;
      ${tw`fill-oranjo`}
    }
  `
  
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
              <NormalText tw="text-[21px] leading-[19px] text-[#D3D3D3] mb-[32px]">Learn, follow or inspect us.</NormalText>
              <div tw="flex gap-x-[55px] w-full justify-center mb-[12rem]">
                <a href="https://wega.gitbook.io/wega-litepaper/" css={hoverStrokeOranjoStyle} target="_blank" tw="w-[44px]" rel="noreferrer">
                <WhitepaperIcon width="100%" height="100%" />
                </a>
                <a href="https://twitter.com/PlayWega" css={hoverFillOranjoStyle} target="_blank" tw="w-[44px]" rel="noreferrer">
                  <TwitterIcon width="100%" height="100%" />
                </a>
                <a href="https://github.com/Misfits-Labs" css={hoverStrokeOranjoStyle} target="_blank" tw="w-[44px]" rel="noreferrer">
                  <GithubIcon width="100%" height="100%"/>
                </a>
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