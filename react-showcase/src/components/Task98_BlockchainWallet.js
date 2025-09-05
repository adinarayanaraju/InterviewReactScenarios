import React from 'react';

const Task98_BlockchainWallet = () => {
  return (
    <div>
      <h2>Task 98: Blockchain Wallet Integration (Conceptual)</h2>
      <div className="description">
        <p>
          Integrating a blockchain wallet (like <strong>MetaMask</strong>) into a React application allows users to interact with decentralized applications (dApps) directly from their browser. This process is done entirely on the frontend and involves communicating with a wallet extension injected into the browser by the user.
        </p>

        <h3>Key Libraries</h3>
        <p>
          Libraries like <strong><code>ethers.js</code></strong> or <strong><code>web3.js</code></strong> are essential. They provide a JavaScript API to interact with the Ethereum blockchain and the user's wallet. More recently, hooks-based libraries like <strong><code>wagmi</code></strong> and UI toolkits like <strong>RainbowKit</strong> have made this process much simpler for React developers.
        </p>

        <h3>The Connection Flow</h3>
        <ol>
          <li>
            <strong>Detecting a Provider:</strong> The React app first checks if a wallet provider (e.g., MetaMask) is installed. The wallet injects a special object, <code>window.ethereum</code>, into the browser's global scope. The app checks for the existence of this object.
          </li>
          <li>
            <strong>Connecting the Wallet:</strong>
            <ul>
              <li>The user clicks a "Connect Wallet" button in the React app.</li>
              <li>This triggers a call to <code>window.ethereum.request(&#123; method: 'eth_requestAccounts' &#125;)</code>.</li>
              <li>The MetaMask extension will pop up, asking the user for permission to connect their wallet to the site.</li>
            </ul>
          </li>
          <li>
            <strong>Getting Account Info:</strong>
            <ul>
              <li>If the user approves, the request resolves and returns an array of the user's wallet addresses (accounts).</li>
              <li>The React app can then store the connected account address in its state and display it in the UI (e.g., "Connected: 0x...").</li>
              <li>Using this address, the app can use <code>ethers.js</code> to make read-only calls to the blockchain to fetch data, such as the user's ETH balance or their ownership of specific NFTs.</li>
            </ul>
          </li>
          <li>
            <strong>Signing Transactions:</strong>
            <ul>
              <li>For actions that require writing to the blockchain (like transferring tokens or minting an NFT), the dApp needs to ask the user to sign a transaction.</li>
              <li>The React app constructs the transaction details and uses a function like <code>signer.sendTransaction(tx)</code>.</li>
              <li>This again prompts the user via the MetaMask extension to review the transaction details (gas fees, etc.) and approve or reject it. The private keys used for signing never leave the user's secure wallet.</li>
              <li>If approved, the wallet signs the transaction and broadcasts it to the Ethereum network. The app then waits for the transaction to be mined and confirmed.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Task98_BlockchainWallet;
