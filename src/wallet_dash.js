import { BTC } from './wallet_btc';
import { DASHParams } from './params';

export class DASH extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Dash';
    this.symbol = 'DASH';
    this.key.opt.Params = DASHParams;
  }
}
