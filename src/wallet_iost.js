import { ETH } from './wallet_eth';

export class IOST extends ETH {
  constructor(key) {
    super(key);
    this.name = 'Internet of Services';
    this.symbol = 'IOST';
    this.contract = '0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab';
  }
}
