import { SVGComponent } from '../svg';
import { OfferBarNFTNameOrPriceETH } from '../../offers/types';
import { 
 NFTProps, 
 OfferActionNFTRectangleGradientWrapper,
 OfferActionNFTRectangleBigNFTDetailWrapper,
 OfferActionsNFTRectangleBigNFTName,
 OfferActionsNFTRectangleBigCollectionName,
 OfferActionsNFTRectangleBigOwner,
 OfferActionsNFTRectangleTraits,
} from './types';
import {miniWalletAddress} from '../../../utils'


interface OfferActionsNFTRectangleProps {
 yours?: boolean;
 nft: NFTProps;
}

const OfferActionsNFTRectangle: React.FC<OfferActionsNFTRectangleProps> = (props) => {
  return props ? (
   <OfferActionNFTRectangleGradientWrapper>
    <SVGComponent className="image-wrapper" svgString={props?.nft?.svgString as string} />
    <OfferActionNFTRectangleBigNFTDetailWrapper>
     <OfferActionsNFTRectangleBigNFTName>{props.nft.nftName}</OfferActionsNFTRectangleBigNFTName>
     <OfferBarNFTNameOrPriceETH>Price: {props.nft.ethPrice} ETH</OfferBarNFTNameOrPriceETH>
     <OfferActionsNFTRectangleBigCollectionName>Collection: {miniWalletAddress(props.nft.nftAddress as `0x${string}`)}</OfferActionsNFTRectangleBigCollectionName>
     <OfferActionsNFTRectangleBigOwner>Owner: {miniWalletAddress(props.nft.owner as `0x${string}`)}</OfferActionsNFTRectangleBigOwner>
     <OfferActionsNFTRectangleTraits>Traits: </OfferActionsNFTRectangleTraits>
    </OfferActionNFTRectangleBigNFTDetailWrapper>
   </OfferActionNFTRectangleGradientWrapper>
  )
   : <></>
}

export default OfferActionsNFTRectangle;
