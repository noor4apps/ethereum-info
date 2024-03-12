import {getTokenBalance} from '../contractInteraction';

// Mocking Web3 and its contract methods
jest.mock('web3', () => {
    return jest.fn().mockImplementation(() => {
        return {
            eth: {
                Contract: jest.fn().mockImplementation(() => ({
                    methods: {
                        balanceOf: jest.fn().mockReturnThis(),
                        call: jest.fn().mockResolvedValue('10'), // Mocking the return value of the call method
                    },
                })),
            },
        };
    });
});

describe('getTokenBalance', () => {
    it('should return the token balance', async () => {
        const holder = '0x1234567890123456789012345678901234567890';
        const INFURA_API_KEY = 'your_infura_api_key';
        const tokenContract = 'your_token_contract_address';

        const balance = await getTokenBalance(holder, INFURA_API_KEY, tokenContract);
        expect(balance).toBe('10');
    });
});
