declare module '@noor4app/ethereum-info/blockNumber.js' {
    export const getLastBlockNumber: (providerUrl: string) => Promise<number>;
}
