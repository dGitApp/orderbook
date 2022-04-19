
let API_address = 'https://api.trader.xyz/orderbook/orders'

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

export function orderList(params:SearchOrdersParams) {

    return (
        <div> 
        
        </div> 
    )
}
