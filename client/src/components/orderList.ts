
// Using the nft swap sdk library --> use the function search orders from orderbook.ts and create a react component for fetching orders
import {useReducer, useEffect, useState, useRef} from "react"
import { searchOrderbook } from "@traderxyz/nft-swap-sdk/dist/sdk/v4/orderbook";

export interface OrderbookRequestOptions {
  rootUrl?: string;
}

export interface SearchOrdersParams {
  erc20Token?: string;
  nftTokenId?: string;
  nftToken?: string;
  nftType?: string;
  chainId?: string;
  maker?: string;
  taker?: string;
  nonce?: string;
  // Defaults to only 'open' orders
  status?: 'open' | 'filled' | 'expired' | 'cancelled' | 'all';
}

export function orderList(params:SearchOrdersParams,API_URL:OrderbookRequestOptions) {
    
    const fetchResults = await searchOrderbook(params,API_URL)
    
    return (
        <div>
        </div> 
    )
}
