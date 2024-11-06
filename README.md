# Solana On-Chain Voting

**Solana On-Chain Voting** is a smart contract on the Solana blockchain, enabling users to cast votes on-chain. Built using the **Anchor** framework, this project provides functionality for creating and managing on-chain voting sessions.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)

## Installation

1. Ensure you have the following tools installed:
    - **Node.js** and **npm** or **pnpm** for managing dependencies
    - **Solana CLI** for interacting with the Solana blockchain ([Solana CLI installation guide](https://docs.solana.com/cli/install-solana-cli-tools))
    - **Anchor CLI** for developing and deploying Solana programs ([Anchor installation guide](https://project-serum.github.io/anchor/getting-started/installation.html))

2. Clone this repository:

   ```bash
   git clone https://github.com/your-username/solana-onchain-voting.git
   cd solana-onchain-voting
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

## Configuration

1. Set up the Solana CLI configuration to work with your preferred cluster (e.g., `devnet`, `testnet`, or `localnet`):

   ```bash
   solana config set --url https://api.devnet.solana.com
   ```

2. Configure the wallet path in the Anchor `Anchor.toml` file to use your Solana keypair, typically located at `~/.config/solana/id.json`:

   ```toml
   [provider]
   cluster = "Localnet" # or Devnet, Testnet, Mainnet
   wallet = "~/.config/solana/id.json"
   ```

3. Update the `Anchor.toml` file with your program ID after deploying, e.g.,

   ```toml
   [programs.localnet]
   onchain_voting = "YourProgramIDHere"
   ```

## Usage

### Building and Deploying

To build and deploy the program, run:

```bash
anchor build
anchor deploy
```

## Testing

We use **Vitest** for unit tests

1. Run tests:

   ```bash
   pnpm test
   ```

---