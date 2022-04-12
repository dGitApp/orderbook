// schema of order data

const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    erc20Token: String,
    erc20TokenAmount: String,
    nftToken: String,
    nftTokenId: String,
    nftTokenAmount: String,
    nftType: String,
    sellOrBuyNft: 'buy' | 'sell',
    chainId: String,
    order: SignedNftOrderV4Serialized,
    metadata: Record<string, string> | null,
    }
)
