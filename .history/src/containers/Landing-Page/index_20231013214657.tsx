import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainContainer from '../../components/MainContainer'
import tw from 'twin.macro'
import Section from '../../common/Section'
import WordCarousel from '../../components/WordCarousel'
import { DiceGameCard, CoinFlipGameCard, RaffleGameCard } from '../../components/GameCard'
import { MaticIcon, OrIcon, USDCIcon, USDTIcon, Noun392, Noun392L, Noun392R, ColorfulBanner, DiceGameCardImg1, DiceGameCardImg2, meshBg } from '../../assets/images'
import { Link } from 'react-router-dom'
import { GithubIcon, TelegramIcon, XIcon } from '../../assets/icons'
import LaunchButton from '../../components/LaunchGameButton'
const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Wega</title>
            </Helmet>
            <MainContainer>
                <div tw='flex flex-col items-center justify-center text-center w-full ml-20 md:ml-0'>
                    <div tw='text-center items-center justify-center'><h1 tw='text-white font-bold text-[67px] text-center h-[169px] font-primary ml-8 md:ml-0 hidden md:block'>Your NFTs' Favourite<br />Playground<span tw='text-[67px] dark:text-oranjo '>.</span></h1>
                        <h1 tw='text-white font-bold text-[67px] text-start h-[68px] font-primary flex md:hidden mb-[100px] w-full'>Your NFTs' Playground.</h1></div>
                    <div tw='flex w-[780px] flex-col justify-center mt-[30px] mb-[40px] items-center gap-[20px] rounded-xl backdrop-blur-lg border px-[24.79px] py-[41.31px] hidden md:flex md:flex-col'>
                        <div tw='justify-center items-center gap-[20.657px] hidden md:flex md:flex-row'>
                            <DiceGameCardImg1 />
                            <p>Dice Animation here
                            </p>
                            <DiceGameCardImg2 />
                        </div>
                        <LaunchButton />
                    </div>
                    <h3 tw='text-white font-semibold text-[28px] text-center h-[58px] font-primary hidden md:block'>Play multiple P2P betting games with your NFTs.</h3>
                    <h3 tw='text-white font-semibold text-[28px] text-start h-[32px] font-primary block md:hidden mb-12 mt-4 w-[332px]'>P2P betting games for your digital assets.</h3>
                </div>
                <div tw='ml-20 md:ml-0'>
                    <Section
                        direction='col'
                        hdr={<WordCarousel
                            pre="All Fun & Games"
                            className='dark:text-oranjo md:text-[51px] text-[38px]'
                            fontSize={38}
                            words={[
                                " "
                            ]}
                        />}
                    >
                        <div tw='flex flex-col mx-auto p-0 justify-center items-center'>
                            <p tw='text-[16px] md:text-[28px] mt-[-50px] mb-[55px] font-primary'>Use your NFTs as a ticket to your next big win</p>
                            <div tw="container mx-auto p-0 flex flex-col md:flex-row justify-center items-center gap-[32px]">
                                <DiceGameCard />
                                <CoinFlipGameCard />
                                <RaffleGameCard />
                            </div>
                        </div>
                    </Section>
                    <Section direction='col' hdr={<WordCarousel pre="Every asset can sit at this table" className='mt-[1434px] text-[38px]' fontSize={51} words={[
                        " "
                    ]} />}>
                        <div tw='flex flex-col md:flex-row gap-[54px] h-[370px] justify-center items-center mt-36'>
                            <div tw='flex flex-col items-center gap-[24px]  h-full w-[50%]'>
                                <div tw='h-[200px] w-full flex items-center justify-around'>
                                    <MaticIcon tw='h-[139px] w-auto ml-[20px] mr-[-40px]' />
                                    <USDTIcon tw='h-[139px] w-auto mb-[80px] backdrop-blur-2xl rounded-full' />
                                    <USDCIcon tw='h-[139px] w-auto ml-[-43px] mr-[5px] backdrop-blur-[1px] rounded-full' />
                                </div>
                                <h2 tw='text-[28px] font-semibold h-[22px] font-primary'>Tokens</h2>
                                <p tw='text-[21px] h-[19px] font-primary'>Place a bet using approved tokens</p>
                            </div>
                            {/* OR ICON */}<OrIcon tw='w-[66px] h-[47.343px]' />
                            <div tw='flex flex-col items-center gap-[24px]  h-full w-[50%]'>
                                <div tw='h-[200px] w-full flex items-center justify-center'>
                                    <Noun392L tw='mr-[-10px] opacity-50' />
                                    <Noun392 tw='mb-[70px] opacity-100 backdrop-blur-[50px] drop-shadow-xl' />
                                    <Noun392R tw='ml-[-30px] opacity-50 mt-[20px] backdrop-blur-sm rounded-full' />
                                </div>
                                <h2 tw='text-[28px] font-semibold h-[22px] font-primary'>Digital collectables</h2>
                                <p tw='text-[21px] h-[19px] font-primary'>Use your NFT or play with fractions</p>
                            </div>
                        </div>
                    </Section>
                    <Section direction='col' hdr={<WordCarousel pre='Play Hard, Own the Yard' fontSize={51} words={[""]} />}>
                        <div tw='flex flex-col text-center'>
                            <p tw='text-[21px] mt-[-50px] mb-10 font-primary'>Play, earn, claim badges. Receive ownership and earn endless rewards.</p>
                        </div>
                        <div>
                            {/* That animation thing here */}
                        </div>
                    </Section></div>
                <div tw='inline-flex flex-col items-center gap-[115px] ml-20 md:ml-0'>
                    <ColorfulBanner />
                    <div tw='flex flex-col items-center gap-[32px] text-center'>
                        <p tw='font-primary text-[21px] text-[#D3D3D3]'>Join the playrooms</p>
                        <div tw='flex items-center gap-[55px]'>
                            <Link to='https://github.com/Misfits-Labs'><GithubIcon tw='w-[44px] h-auto' /></Link>
                            <Link to='https://twitter.com/PlayWega'><XIcon tw='w-[44px] h-auto' /></Link>
                            <Link to='https://t.me/playwega'><TelegramIcon tw='w-[48px] h-auto' /></Link>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}

export default LandingPage