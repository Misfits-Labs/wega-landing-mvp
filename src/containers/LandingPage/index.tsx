import { Helmet } from 'react-helmet-async'
import LandingPageHeroSection from '../../components/LandingPageHeroSection';
import LandingPageHeroSectionMobile from '../../components/LandingPageHeroSectionMobile';
import LandingPagePlaySection from '../../components/LandingPagePlaySection';
import LandingPageWagerTypeSection from '../../components/LandingPageWagerTypeSection';
import LandingPageOwnTheYardSection from '../../components/LandingPageOwnTheYardSection';
import LandingPageOwnTheYardSectionMobile from '../../components/LandingPageOwnTheYardSectionMobile';
import MainContainer from '../../components/MainContainer';
import { useMediaQuery } from '../../hooks';
const LandingPage = () => {
    const { isMobile } = useMediaQuery();
    return (
        <>
            <Helmet>
                <title>Wega</title>
            </Helmet>
            <MainContainer>
                { 
                    isMobile ? 
                    <LandingPageHeroSectionMobile /> :
                    <LandingPageHeroSection />
                }
                <LandingPagePlaySection />
                <LandingPageWagerTypeSection />
                {
                    isMobile ? <LandingPageOwnTheYardSectionMobile />
                    : <LandingPageOwnTheYardSection />
                } 
            </MainContainer>
        </>
    )
}
export default LandingPage