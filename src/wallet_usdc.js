import { ETH } from './wallet_eth';

export class USDC extends ETH {
  constructor(key) {
    super(key);
    this.name = 'USD Coin';
    this.symbol = 'USDC';
    this.contract = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  }
}
