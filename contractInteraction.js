import {setupWeb3} from './web3Setup';

export const getTokenBalance = async (holder, INFURA_API_KEY, tokenContract) => {
    try {
        const {contract} = setupWeb3(INFURA_API_KEY, tokenContract);
        return await contract.methods.balanceOf(holder).call();
    } catch (error) {
        console.error('Error fetching token balance:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
