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
   tw="mt-[-5rem]"
   hdr={
    <SectionHeaderContainer tw=" flex-col justify-center items-center">
     <SectionHeaderTitle>
      All fun & Games
      </SectionHeaderTitle>
      <SectionHeaderSubtitle>Use your NFTs as a ticket to your next big win</SectionHeaderSubtitle>
     </SectionHeaderContainer>
   }>
   <div tw="container mx-auto p-0 flex flex-row justify-center items-center gap-[32px]">
     <DiceGameCard />
     <CoinFlipGameCard />
     <RaffleGameCard />
   </div>
  </Section>
 )
}
export default LandingPagePlaySection;