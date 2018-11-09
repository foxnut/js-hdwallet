import { BTC } from './wallet_btc';

export class BCH extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Bitcoin Cash';
    this.symbol = 'BCH';
  }
}
