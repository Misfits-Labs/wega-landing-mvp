import React from 'react'
import { Helmet } from 'react-helmet-async'
import LandingPageHeroSection from '../../components/LandingPageHeroSection';
import LandingPagePlaySection from '../../components/LandingPagePlaySection';
import LandingPageWagerTypeSection from '../../components/LandingPageWagerTypeSection';
import LandingPageOwnTheYardSection from '../../components/LandingPageOwnTheYardSection';
import MainContainer from '../../components/MainContainer';

const LandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Wega</title>
            </Helmet>
            <MainContainer>
                <LandingPageHeroSection />
                <LandingPagePlaySection />
                <LandingPageWagerTypeSection />
                <LandingPageOwnTheYardSection />
            </MainContainer>
        </>
    )
}

export default LandingPage