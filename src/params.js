import { networks } from 'bitcoinjs-lib';

export class Params {
  constructor(option) {
    Object.assign(this, networks.bitcoin, option);
  }
}

// btc net params
export const BTCParams = new Params();

// ltc net params
// https://github.com/litecoin-project/litecoin/blob/master/src/chainparams.cpp
export const LTCParams = new Params({
  bech32: 'ltc',
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
});

// doge net params
// https://github.com/dogecoin/dogecoin/blob/master/src/chainparams.cpp
export const DOGEParams = new Params({
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
});

// dash net params
// https://github.com/dashpay/dash/blob/master/src/chainparams.cpp
export const DASHParams = new Params({
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0xcc,
});

// bch net params
// https://github.com/Bitcoin-ABC/bitcoin-abc/blob/master/src/chainparams.cpp
export const BCHParams = new Params({
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
});

// qtum net params
// https://github.com/qtumproject/qtum/blob/master/src/chainparams.cpp
export const QTUMParams = new Params({
  pubKeyHash: 0x3a,
  scriptHash: 0x32,
  wif: 0x80,
});

// usdt net params
// https://github.com/OmniLayer/omnicore/blob/master/src/chainparams.cpp
export const USDTParams = new Params({
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
});
