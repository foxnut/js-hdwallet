import { BCH } from './wallet_bch';
import { BTC } from './wallet_btc';
import { DASH } from './wallet_dash';
import { Enum } from './enum';

export const Coins = new Map([
  [Enum.BTC, BTC],
  [Enum.BCH, BCH],
  [Enum.DASH, DASH],
]);
