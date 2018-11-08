import { payments, ECPair } from 'bitcoinjs-lib';
import bip39 from 'bip39';
import bip32 from 'bip32';
import { Options } from './options';

// console.log(666666, bip39.generateMnemonic(15/3*32));

export class Key {
  constructor(option) {
    if (option.key) {
      this.init(option);
      return;
    }

    if (!option) {
      option = new Options();
    }

    if (!option.seed) {
      option.seed = bip39.mnemonicToSeed(option.mnemonic);
    }

    option.key = bip32.fromSeed(option.seed, option.params);
    this.init(option);
  }

  init(option) {
    this.opt = option;
    this.extended = option.key;
    this.private = this.extended.privateKey;
    this.public = this.extended.publicKey;
  }

  getChildKey(option) {
    if (!option || !option.path) {
      option = new Options();
    }

    option.key = this.extended;
    console.log(404040, option);
    option.path.forEach((i) => {
      option.key = option.key.derive(i);
    })

    return new Key(option);
  }

  privateHex() {
    return this.private.toString('hex');
  }

  privateWIF(compressed) {
    return ECPair.fromPrivateKey(this.private, {
      compressed,
      network: this.opt.params,
    }).toWIF();;
  }

  publicHex() {
    return this.public.toString('hex');
  }

  addressBTC() {
    return payments.p2pkh({
      pubkey: this.public,
      network: this.opt.params,
    }).address;
  }

  addressBCH() {
    // todo
    return this.addressBTC();
  }

  addressP2WPKH() {
    return payments.p2wpkh({
      pubkey: this.public,
      network: this.opt.params,
    }).address;
  }

  addressP2WPKHInP2SH() {
    return payments.p2sh({
      redeem: payments.p2wpkh({
        pubkey: this.public,
        network: this.opt.params,
      })
    }).address;
  }
}
