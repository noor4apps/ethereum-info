declare module '@noor4app/ethereum-info/contractInteraction.js' {
    export const getTokenBalance: (holder: string, INFURA_API_KEY: string, tokenContract: any) => Promise<string>;
}
