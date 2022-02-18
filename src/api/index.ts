/* eslint-disable no-console */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://testapi.pozzleplanet.com/api/',
});

export async function loginUser(data: {
  userName: string;
  pronouns?: string;
  bio: string;
  lat: number;
  long: number;
  signedMsg: {
    message: string;
    signature: string;
  };
}) {
  const result = await axiosInstance.post('login', data);

  if (result.status === 200) {
    return result.data;
  }

  console.error(`Error logging in: ${result.status} ${result.statusText}`);

  return null;
}

export async function getUser(userId: string) {
  const result = await axiosInstance.get(`user/${userId}`);

  if (result.status === 200) {
    return result.data;
  }

  console.error(`Error fetching user: ${result.status} ${result.statusText}`);

  return null;
}

/**
 *
 * Case 1: First time in the app:
 *
 * - If the user doesnt have a wallet => Clicks "I'm New"
 *   - Creates a new wallet via web3 api
 *   - Present them with their seed phrase
 *   - Continue to passport screen, fill out info
 *   - Clicking "Done" => Sign message and hit login endpoint
 *
 * - If the user has am existing wallet => Clicks "Login with Wallet"
 *   - Connect wallet via WalletConnect
 *   - Continue to passport screen, fill out info
 *   - Clicking "Done" => Sign message and hit login endpoint
 *
 * Case 2: Returning to the app:
 *
 * - When the user returns, the app will automatically connect to the wallet
 * - If the user was logged out from within the app, they will be presented with the Onboarding flow again
 * - They have the option to create a new wallet or reconnect the existing wallet
 * - If they choose to connect the existing wallet, we already have the passport info saved, so we can go straight to "Home"
 *
 */
