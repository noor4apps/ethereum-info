import Web3 from 'web3';

const usdtContractABI = [{
    "constant": true,
    "inputs": [{"name": "who", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

export const setupWeb3 = (INFURA_API_KEY, tokenContract) => {
    const providerUrl = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;

    try {
        const web3 = new Web3(providerUrl);
        const contract = new web3.eth.Contract(usdtContractABI, tokenContract);
        return {web3, contract};
    } catch (error) {
        console.error('Error setting up Web3:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
