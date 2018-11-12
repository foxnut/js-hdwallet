import { BTC } from './wallet_btc';
import { USDTParams } from './params';

export class USDT extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Tether';
    this.symbol = 'USDT';
    this.key.opt.Params = USDTParams;
  }
}
