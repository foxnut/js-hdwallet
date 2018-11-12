import { BCH } from './wallet_bch';
import { BTC } from './wallet_btc';
import { DASH } from './wallet_dash';
import { DOGE } from './wallet_doge';
import { ETC } from './wallet_etc';
import { ETH } from './wallet_eth';
import { IOST } from './wallet_iost';
import { LTC } from './wallet_ltc';
import { QTUM } from './wallet_qtum';
import { USDC } from './wallet_usdc';
import { USDT } from './wallet_usdt';
import { Enum } from './enum';

export const Coins = new Map([
  [Enum.BTC, BTC],
  [Enum.BCH, BCH],
  [Enum.DASH, DASH],
  [Enum.DOGE, DOGE],
  [Enum.ETC, ETC],
  [Enum.ETH, ETH],
  [Enum.IOST, IOST],
  [Enum.LTC, LTC],
  [Enum.QTUM, QTUM],
  [Enum.USDC, USDC],
  [Enum.USDT, USDT],
]);
