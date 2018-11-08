import bip39 from 'bip39';
import { Enum } from './Enum';

export function NewMnemonic(length, language) {
  if (!length) {
    length = 12;
  }

  if (length < 12) {
    length = 12;
  }

  if (length > 24) {
    length = 24;
  }

  let wordlist = bip39.wordlists.EN;

  switch (language) {
    case Enum.ChineseSimplified:
      wordlist = bip39.wordlists.chinese_simplified
      break;
    case Enum.ChineseTraditional:
      wordlist = bip39.wordlists.chinese_traditional
      break;
  }

  return bip39.generateMnemonic(
    (length / 3).toFixed(0) * 32,
    undefined,
    wordlist,
  );
}
