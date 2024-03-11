import {setupWeb3} from '../web3Setup.js';

// Mock the Web3 module
jest.mock('web3', () => {
    return jest.fn().mockImplementation(() => {
        return {
            eth: {
                Contract: jest.fn().mockImplementation(() => {
                    return {}; // Ensure this object matches the expected contract instance structure
                }),
            },
        };
    });
});

describe('setupWeb3', () => {
    it('should return a web3 instance and contract instance', () => {
        const INFURA_API_KEY = 'your_infura_api_key';
        const tokenContract = '0xYourTokenContractAddress';

        const {web3, contract} = setupWeb3(INFURA_API_KEY, tokenContract);

        // Check if web3 and contract are defined
        expect(web3).toBeDefined();
        expect(contract).toBeDefined();

        // Optionally, you can also test if the Contract constructor was called with the correct arguments
        expect(web3.eth.Contract).toHaveBeenCalledWith(expect.anything(), tokenContract);
    });
});
