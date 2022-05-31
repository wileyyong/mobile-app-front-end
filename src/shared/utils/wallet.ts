import { entropyToMnemonic } from "@ethersproject/hdnode";
import { ethers } from "ethers";

import { fetchItemFromStorage } from '$utils';

export const generateMnemonic = async (): Promise<string> => {
  const randomBytes = ethers.utils.randomBytes(16);
  const language = ethers.wordlists.en;
  return entropyToMnemonic(randomBytes, language);
}

export const addressFromMnemonic = async (mnemonic: string): Promise<string> => {
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  return wallet.address;
}

export const signMessage = async (message: string): Promise<string> => {
  const mnemonic = await fetchItemFromStorage('mnemonic');
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  const flatSig = await wallet.signMessage(message);
  return flatSig;
}