import {setupWeb3} from './web3Setup';

export const getTokenBalance = async (holder, INFURA_API_KEY, tokenContract) => {
    try {
        const {web3, contract} = setupWeb3(INFURA_API_KEY, tokenContract);
        const result = await contract.methods.balanceOf(holder).call();
        return web3.utils.fromWei(result, "ether");
    } catch (error) {
        console.error('Error fetching token balance:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
