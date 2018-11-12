import { BTC } from './wallet_btc';
import { QTUMParams } from './params';

export class QTUM extends BTC {
  constructor(key) {
    super(key);
    this.name = 'Qtum';
    this.symbol = 'QTUM';
    this.key.opt.Params = QTUMParams;
  }
}
