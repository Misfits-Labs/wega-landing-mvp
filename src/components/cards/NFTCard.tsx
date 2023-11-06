import { 
 NFTProps, 
 CardWrapper, 
 RequestProps
} from './types';
import { SVGComponent } from '../svg';
import { Link } from 'react-router-dom';
import { TransactionState } from '../../listing'

export type NFTCardProps = {
 listButton?: boolean;
 tradeButton?: boolean;
 offersButton?: boolean;
 listed?: boolean; 
 isOfferMaker?: boolean;
 nft: NFTProps,
 request?: RequestProps;
}

const NFTCard: React.FC<NFTCardProps> = ({  
 offersButton,
 isOfferMaker,
 listButton, 
 request,
 listed,
 tradeButton,
 nft,
}) => {  
  return (
    <CardWrapper>
      <header>
      <SVGComponent svgString={nft.svgString as string}/>
      { /* add banner that shows if an nft is listed or unlisted */}
      </header>
      <div>
      <h5>{nft.nftName}</h5>
      <h6>price: {nft.ethPrice} ETH</h6>
      </div>
      {
      listButton && !listed && 
      <footer>
      <Link to={`/list`}>
        <button type="button">
          List
        </button>
      </Link>
      </footer>
      }
      {
        tradeButton && request && request.state === TransactionState.OPEN && 
        <Link to="/trade">
        <button type="button">
          Make an offer
        </button>
        </Link>
      }
    </CardWrapper>
  )
}
export default NFTCard;
