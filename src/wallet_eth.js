export class ETH {
  constructor(key) {
    this.key = key;
    this.name = 'Ethereum';
    this.symbol = 'ETH';
    this.contract = '';
  }

  GetType() {
    return this.key.opt.CoinType;
  }

  GetName() {
    return this.name;
  }

  GetSymbol() {
    return this.symbol;
  }

  GetKey() {
    return this.key;
  }

  GetAddress() {
    return this.key.AddressETH();
  }
}
