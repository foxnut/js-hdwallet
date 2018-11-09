import { networks } from 'bitcoinjs-lib';
import { Enum } from './Enum';
import { Params } from './Params';

export class Options {
  constructor(option) {
    if (!option) {
      option = {};
    }

    this.Params = new Params(option.Params);
    this.Mnemonic = '';
    this.Password = '';
    this.Language = '';
    this.Purpose = Enum.ZeroQuote + 44;
    this.CoinType = Enum.ZeroQuote;
    this.Account = Enum.ZeroQuote;
    this.Change = 0;
    this.AddressIndex = 0;

    Object.assign(this, option);

    this.Path = [
      this.Purpose,
      this.CoinType,
      this.Account,
      this.Change,
      this.AddressIndex,
    ];
  }
}
