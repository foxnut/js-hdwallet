import { ETH } from './wallet_eth';

export class ETC extends ETH {
  constructor(key) {
    super(key);
    this.name = 'Ethereum Classic';
    this.symbol = 'ETC';
  }
}
