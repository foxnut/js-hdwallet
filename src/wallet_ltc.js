import { BTC } from './wallet_btc';
import { LTCParams } from './params';

export class LTC extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Litecoin';
    this.symbol = 'LTC';
    this.key.opt.Params = LTCParams;
  }
}
