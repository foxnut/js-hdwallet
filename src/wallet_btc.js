export class BTC {
  constructor(key) {
    this.key = key;
    this.name = 'Bitcoin';
    this.symbol = 'BTC';
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
    return this.key.AddressBTC();
  }
}
