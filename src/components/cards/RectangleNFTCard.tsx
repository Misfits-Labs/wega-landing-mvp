import { RectangleNFTCardWrapper, RectangleNFTCardProps } from './types';
import { SVGComponent } from '../../common/svg';
import { RequestProps, NFTProps } from '../../common/cards';
import { shortenHexString } from '../../../utils'

const RectangleNFTCard = (props: RectangleNFTCardProps) => {
 // should display the nft select with selected squares (yours)
 // theirs display the nft from listedNFTs

 return props.nft && (
    <RectangleNFTCardWrapper>
     <h6 className="card-title" style={{fontWeight: "700"}}>{props.yours ? "Your asset" : "Their asset"}</h6>
     <div className="information">
      <SVGComponent svgString={props.nft.svgString as string} />
      <div className='details'>
        <h6>{ props.nft.nftName }</h6>
        <h6>{ (props.nft.ethPrice && String(props.nft.ethPrice).concat(' ETH')) || '1.00 ETH'}</h6>
        <h6>Collection: { shortenHexString(props.nft.nftAddress as `0x${string}`, 5)}</h6>
        <h6>Owner: {props.yours ? "You" : shortenHexString(props.nft.owner as `0x${string}`, 5) } </h6>
      </div>
     </div>
    </RectangleNFTCardWrapper>
  )
}

export default RectangleNFTCard;
