import { payments, ECPair } from 'bitcoinjs-lib';
import { toCashAddress } from 'bchaddrjs';
import { publicToAddress, toChecksumAddress, addHexPrefix } from 'ethereumjs-util';
import { mnemonicToSeed } from 'bip39';
import { fromSeed } from 'bip32';
import { Options } from './options';
import { Coins } from './wallet';
import { Enum } from './enum';

export class Key {
  constructor(option) {
    if (option.key) {
      this.init(option);
      return;
    }

    if (!option) {
      option = new Options();
    }

    if (!option.Seed) {
      option.Seed = mnemonicToSeed(option.Mnemonic);
    }

    option.key = fromSeed(option.Seed, option.Params);
    this.init(option);
  }

  init(option) {
    this.opt = option;
    this.extended = option.key;
    this.Private = this.extended.privateKey;
    this.Public = this.extended.publicKey;
  }

  GetChildKey(option) {
    const newOption = new Options(option);

    if (!option) {
      option = new Options();
    }

    if (Enum.CoinTypes.has(newOption.CoinType)) {
      newOption.CoinType = Enum.CoinTypes.get(newOption.CoinType);
    }

    option.key = this.extended;
    newOption.GetPath().forEach((i) => {
      option.key = option.key.derive(i);
    })

    return new Key(option);
  }

  GetWallet(option) {
    const key = this.GetChildKey(option);
    const coiner = Coins.get(key.opt.CoinType);

    return new coiner(key);
  }

  PrivateHex() {
    return this.Private.toString('hex');
  }

  PrivateWIF(compressed) {
    return ECPair.fromPrivateKey(this.Private, {
      compressed,
      network: this.opt.Params,
    }).toWIF();;
  }

  PublicHex() {
    return this.Public.toString('hex');
  }

  AddressBTC() {
    return payments.p2pkh({
      pubkey: this.Public,
      network: this.opt.Params,
    }).address;
  }

  AddressBCH() {
    return toCashAddress(this.AddressBTC());
  }

  AddressETH() {
    const addressBuffer = publicToAddress(this.Public, true);
    const hexAddress = addressBuffer.toString('hex');
    const checksumAddress = toChecksumAddress(hexAddress);

    return addHexPrefix(checksumAddress);
  }

  AddressP2WPKH() {
    return payments.p2wpkh({
      pubkey: this.Public,
      network: this.opt.Params,
    }).address;
  }

  AddressP2WPKHInP2SH() {
    return payments.p2sh({
      redeem: payments.p2wpkh({
        pubkey: this.Public,
        network: this.opt.Params,
      })
    }).address;
  }
}
