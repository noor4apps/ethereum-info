import {setupWeb3} from './web3Setup';

export const getLastBlockNumber = async (providerUrl) => {
    try {
        const {web3} = setupWeb3(providerUrl);
        return await web3.eth.getBlockNumber();
    } catch (error) {
        console.error('Error fetching last block number:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
