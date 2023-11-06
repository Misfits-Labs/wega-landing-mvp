import styled from 'styled-components';
import { BigNumber } from 'ethers';
import {TransactionState} from '../../listing'
import {OfferState} from '../../trade'

// export const Colors = {
//   [TransactionState.OPEN]: '#F26D21',
//   [TransactionState.APPROVED]: '#787878',
//   [TransactionState.READY]: '#E62700',
//   [TransactionState.CLOSED]: '#151515'
// }

// export const BadgeText = {
//   [TransactionState.OPEN]: 'OPEN',
//   [TransactionState.APPROVED]: 'APPROVED',
//   [TransactionState.READY]: 'READY',
//   [TransactionState.CLOSED]: 'CLOSED'
// }

export type NFTCardProps = {
  tradeButton?: boolean;
  withdrawButton?: boolean;
  offersButton?: boolean;
  listButton?: boolean;
  depositButton?: boolean;
  svgString?: string;
  imgUrl?: string;
  ethPrice: number;
  transferId: string | any;
} 


export type RequestProps = {
  state: TransactionState;
  nftAgainst: string | `0x${string}`;
  tokenIdAgainst: number | BigNumber;
  ownerAgainst: string | `0x${string}`;
  nftFor: string | `0x${string}`;
  tokenIdFor: number | BigNumber;
  ownerFor: string | `0x${string}`;
  deadline: number | BigNumber;
  transactionId: string;
  nftName: string;
  nonce: number | BigNumber;
  ts?: number;
  id?: string;
  offerState: OfferState;
  creator?: `0x${string}`;
  shouldSync?: boolean;
} & NFTCardProps

export type NFTProps = {
  tokenId: number | BigNumber;
  nftAddress: string | `0x${string}`;
  owner: string;
  nftName: string;
  approved?: boolean | undefined | Promise<boolean>;
  id: string;
} & NFTCardProps

export const CardWrapper = styled.article`
  background-color: #2A2A2A;
  width: 22.5%;
  padding: 0rem;
  & header {
    height: 226px;
    margin-left: 0rem;
    margin-right: 0rem;
    padding: 0rem;
    position: relative;
    margin-bottom: 0rem;
    & > div {
      padding: 1rem;
      border-radius: 5px 5px 0px 0px;
      width: 100%;
      height: 100%;
    }
 }
  & > div, footer {
    padding: 10px 15px;
 }
 & footer {
  margin: 0rem;
  background-color: inherit;
  button {
    justify-content: center;
    max-width: unset;
    width: 100%;
  }
  a {
    &:hover {
      text-decoration: unset;
    }
  }
 }
`

export const NFTCardWrapper = styled.article`
  background-color: #2A2A2A;
  width: 22.5%;
  padding: 0rem;
  & header {
    height: 226px;
    margin-left: 0rem;
    margin-right: 0rem;
    padding: 0rem;
    position: relative;
    margin-bottom: 0rem;
    & > div {
      padding: 1rem;
      border-radius: 5px 5px 0px 0px;
      width: 100%;
      height: 100%;
    }
 }
  & > div, footer {
    padding: 10px 15px;
 }
 & footer {
  margin: 0rem;
  background-color: inherit;
  button {
    justify-content: center;
    max-width: unset;
    width: 100%;
  }
  a {
    &:hover {
      text-decoration: unset;
    }
  }
 }
`

export const RequestCardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  justify-content: start;
  summary {
    padding: 16px;
  }
`

export interface RectangleNFTCardProps {
  yours: boolean;
  nft: NFTProps;
}

export const RectangleNFTCardWrapper = styled.div`
  display:flex;
  flex-direction:column;
  text-align: left;
  width: 100%;
  margin-top: 1rem;
  
  & > h6:first-child {
    margin-bottom: 0.25rem; 
  }
  & div.information {
      display:flex;
      flex-direction:row;
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid #9A9A9A;
      border-radius: 10px;
      padding: 12px;
      background-color: #3F3F3F;
      h6 {
        margin: unset;
        margin-bottom: 0.25rem;
      }
      > div:first-child {
          margin-right: 0.5rem; 
          width: 100px;
          height: 100px;
          svg {
            width: 100%;
          }
          padding: 5px;
          background-color:  #787878;
          border-radius:5px;
      }
      & > div.details {
        display:flex;
        flex-direction: column;
        padding: 2px;
      }
  }
`
interface SwapIconWrapperProps {
  width?: string;
}

export const SwapIconWrapper = styled.div<SwapIconWrapperProps>`
  --swap-icon-default-width: 40px;
  width: ${({ width }) => width || "var(--swap-icon-default-width)" };
`

export const OfferActionNFTRectangleGradientWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
min-width: 473px; 
margin: auto;
gap: 0px 20px;

position: relative;
padding: 12px 12px;
box-sizing: border-box;

--border: 2px;
background: #505050;
background-clip: padding-box;
border: solid var(--border) transparent;
border-radius: 1em;

&:before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  margin: calc(-1 * var(--border));
  border-radius: inherit;
  background: linear-gradient(to right, #e68572, #8246e2);
}
> div.image-wrapper {
  border-radius: 5px;
  background-color: rgb(120, 120, 120);
  width: 200px;
  height: 200px; 
}
`

export const OfferActionNFTRectangleBigNFTDetailWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px 0px;
`

export const OfferActionsNFTRectangleBigNFTName = styled.span`
  color: #FDFDFD;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: League Spartan;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; 
`

export const OfferActionsNFTRectangleBigCollectionName = styled.span`
  color: #FDFDFD;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: League Spartan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; 
`

export const OfferActionsNFTRectangleBigOwner = styled.span`
  color: #FDFDFD;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: League Spartan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`

export const OfferActionsNFTRectangleTraits = styled.span`
  color: #FDFDFD;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: League Spartan;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
`
