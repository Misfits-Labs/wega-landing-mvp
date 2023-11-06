import {type NFTProps, RequestProps, NFTCardProps, NFTCardWrapper } from '../cards'
import {Link} from 'react-router-dom'
import {TransactionState} from '../../listing'
import {SVGComponent} from '../svg';
import {
  useAccount
} from 'wagmi';
import {
  parseIntFromBignumber
} from '../../../utils'

const NFTOrRequestCard = (props: NFTProps | RequestProps) => {
  
  const {
   tradeButton,
   withdrawButton,
   offersButton,
   listButton,
   depositButton,
  } = props as NFTCardProps;

  const { address } = useAccount();
  const rProps = props as RequestProps;
  const mProps = props as NFTProps;
  
  return (
   <NFTCardWrapper>
     <header>
      <SVGComponent svgString={props.svgString as string}/>
     </header>
     <div>
      <h5>{props.nftName}</h5>
      <h6>price: {mProps.ethPrice} ETH</h6>
     </div>
     {
      (offersButton || withdrawButton || tradeButton || listButton || depositButton) && 
      <footer>
        {
          offersButton && rProps.ownerAgainst?.toLowerCase() === address?.toLowerCase() &&
          <Link to="/offers">
            <button type="button">
              Offers
            </button>
          </Link>
        }
        {
          tradeButton && rProps && Number(rProps?.state) === TransactionState.OPEN &&  
          <Link to={'/trade'}>
            <button type="button">
              Make an offer
            </button>
          </Link>
        }
        {
          listButton && mProps && 
          <Link to={`/list`}>
            <button type="button">
              List
            </button>
          </Link>
        }
      </footer>
     }
   </NFTCardWrapper>
   )
}

export default NFTOrRequestCard;