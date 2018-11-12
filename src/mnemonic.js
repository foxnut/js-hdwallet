import { wordlists, generateMnemonic } from 'bip39';
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

  let wordlist = wordlists.EN;

  switch (language) {
    case Enum.ChineseSimplified:
      wordlist = wordlists.chinese_simplified
      break;
    case Enum.ChineseTraditional:
      wordlist = wordlists.chinese_traditional
      break;
  }

  return generateMnemonic(
    (length / 3).toFixed(0) * 32,
    undefined,
    wordlist,
  );
}
