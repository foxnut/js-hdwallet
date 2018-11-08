import { networks } from 'bitcoinjs-lib';
import { Enum } from './Enum';

export class Options {
  constructor(option) {
    this.params = networks.bitcoin;
    this.mnemonic = '';
    this.password = '';
    this.language = '';
    this.purpose = Enum.ZeroQuote + 44;
    this.coinType = Enum.ZeroQuote;
    this.account = Enum.ZeroQuote;
    this.change = 0;
    this.addressIndex = 0;

    Object.assign(this, option);

    this.path = [
      this.purpose,
      this.coinType,
      this.account,
      this.change,
      this.addressIndex,
    ];
  }
}
