class Enumer {
  constructor() {
    // mnemonic language
    this.English = 'english';
    this.ChineseSimplified = 'chinese_simplified';
    this.ChineseTraditional = 'chinese_traditional';

    // zero is deafult of uint32
    this.Zero = 0;
    this.ZeroQuote = 0x80000000;
    this.BTCToken = 0x10000000;
    this.ETHToken = 0x20000000;

    // wallet type from bip44
    // https://github.com/satoshilabs/slips/blob/master/slip-0044.md#registered-coin-types
    this.BTC = this.ZeroQuote + 0;
    this.LTC = this.ZeroQuote + 2;
    this.DOGE = this.ZeroQuote + 3;
    this.DASH = this.ZeroQuote + 5;
    this.ETH = this.ZeroQuote + 60;
    this.ETC = this.ZeroQuote + 61;
    this.BCH = this.ZeroQuote + 145;
    this.QTUM = this.ZeroQuote + 2301;

    // btc token
    this.USDT = this.BTCToken + 1;

    // eth token
    this.IOST = this.ETHToken + 1;
    this.USDC = this.ETHToken + 2;

    this.CoinTypes = new Map([
      [this.USDT, this.BTC],
      [this.IOST, this.ETH],
      [this.USDC, this.ETH],
    ]);
  }
};

export const Enum = new Enumer();
