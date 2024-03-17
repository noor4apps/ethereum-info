# Ethereum and USDT Smart Contract Interaction

This package provides a simple and efficient way to interact with Ethereum and the USDT smart contract. It allows you to
fetch token balances and get the last block number on the Ethereum mainnet.

## Features

- Setup Web3 connection to Ethereum mainnet using Infura.
- Interact with USDT smart contract to fetch token balances.
- Fetch the last block number on the Ethereum mainnet.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- An Infura API key for connecting to the Ethereum mainnet.

### Installation

```shell
npm i @noor4app/ethereum-info
```

### Usage

1. Import the `getLastBlockNumber` function from `blockNumber.js`
2. Import the `getTokenBalance` function from `contractInteraction.js`
3. Use the `getTokenBalance` function to fetch the token balance of a holder.
4. Use the `getLastBlockNumber` function to get the last block number on the Ethereum mainnet.

### Example:
In The [vue-ether](https://github.com/noor4apps/vue-ether) Vue.js project the package is utilized within the [BlockchainInfo](https://github.com/noor4apps/vue-ether/blob/master/src/components/BlockchainInfo.vue) component.

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
