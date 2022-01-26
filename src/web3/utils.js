/**
 *
 * @param {*} ensName
 * @param {import('web3').default} web3
 * @returns
 */
export async function ensToAddress(ensName, web3) {
  return web3.eth.ens.getAddress(ensName);
}
