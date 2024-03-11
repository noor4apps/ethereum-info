import {getLastBlockNumber} from '../blockNumber';

jest.mock('../web3Setup', () => ({
    setupWeb3: jest.fn().mockReturnValue({
        web3: {
            eth: {
                getBlockNumber: jest.fn().mockResolvedValue(1234567),
            },
        },
    }),
}));

describe('getLastBlockNumber', () => {
    it('should return the last block number', async () => {
        const providerUrl = 'https://mainnet.infura.io/v3/your_infura_api_key';
        const blockNumber = await getLastBlockNumber(providerUrl);
        expect(blockNumber).toBe(1234567);
    });
});

