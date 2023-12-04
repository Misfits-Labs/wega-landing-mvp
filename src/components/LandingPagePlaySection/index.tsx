import Section from "../../common/Section"
import { SectionHeaderContainer, SectionHeaderTitle, SectionHeaderSubtitle  } from "../../common/Section/types";
import { 
 DiceGameCard,
 CoinFlipGameCard,
 RaffleGameCard
} from '../../components/GameCard';
import 'twin.macro';
const LandingPagePlaySection = () => {
 return (
  <Section
   direction='col'
   tw="mt-[5rem] w-full"
   hdr={
    <SectionHeaderContainer >
     <SectionHeaderTitle>
      All fun & Games<span tw="text-oranjo">.</span>
      </SectionHeaderTitle>
      <SectionHeaderSubtitle tw="text-[#F1F1EF] w-full text-left sm:text-center">Use your NFTs as a ticket to your next big win</SectionHeaderSubtitle>
     </SectionHeaderContainer>
   }>
   <div tw="container mx-auto p-0 flex flex-col sm:flex-row justify-center items-center gap-[32px]">
     <DiceGameCard />
     <CoinFlipGameCard />
     <RaffleGameCard />
   </div>
  </Section>
 )
}
export default LandingPagePlaySection;