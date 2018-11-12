import { BTC } from './wallet_btc';
import { DOGEParams } from './params';

export class DOGE extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Dogecoin';
    this.symbol = 'DOGE';
    this.key.opt.Params = DOGEParams;
  }
}
