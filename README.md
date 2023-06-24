# Donation to Educator dApp -- from Creation to Deployment
In this tutorial, we will create, test, and deploy a smart contract called Donation. This contract will allow online educators to receive donations for the free content they provide.

## Backend
1. Open the terminal (command line), create two new folders called `donation-to-educator` and `backend`. Go into the `backend` folder.
```
mkdir donation-to-educator
cd donation-to-educator
mkdir backend
cd backend
```

2. Set up a Hardhat project. Install the necessary libraries, by typing in the terminal:
```
npm init --yes
npm install --save-dev hardhat @nomicfoundation/hardhat-chai-matchers chai @nomiclabs/hardhat-ethers ethers
npm install dotenv
```

3. This library might be necessary to install as well, especially if you're a Windows user.
```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

4. Make sure you are still in the `backend` directory. Now, create a sample contract project by typing in the terminal:
```
npx hardhat
```
- Select `Create a Javascript Project`. Don't change anything in the Hardhat project root, just click enter. Yes, add a `.gitignore`. 

5. Open the `backend` folder and remove any present contracts inside the `contracts` folder. Insert your `Donation` contract.

# 6. Now, inside the `scripts` folder, replace the contect of the `deploy.js` file with the [deploy.js code from this project](https://google.com).

7. Create a `.env` file inside the `backend` folder. This will be used to store your wallet key and your Quicknode endpoint. A QuickNode API endpoint gives you quick access to a network of nodes. 

Add these two lines inside the `.env` file, and update the content inside the quotation marks:
```
QUICKNODE_HTTP_URL="your-quicknode-http-provider-goes-here-inside-the-quotation-marks"
PRIVATE_KEY="your-wallet-private-key-goes-here-inside-the-quotation-marks"
```

# 8. Open the `hardhat.config.js` file inside the `backend` folder and replace its content with the [hardhat.config.js code from this project](https://google.com). 

9. Compile your Contract by going back to your terminal (ensure you are in the `backend` directory). And type:
```
npx hardhat compile
```
- Every time you modify your contract (`Donation`), you will have to repeat the above compile step.

10. With your contract compiled, now we can deploy it to the sepolia testnet. In your terminal type:
```
npx hardhat run scripts/deploy.js --network sepolia
```

Save the contract address that was printed out.
Go to https://sepolia.etherscan.io/ and insert the contract address into the Explorer input field. Take some time to explore the transaction details of your contract.
- Save this address somewhere. Don't lose it!

## Testing
Every Contract should be tested before deployment. Here we deployed first becuause it's freaking exciting to see our contract deployed and because we're using a testnet. 

# 1. Open the `test` folder and remove any present files inside of it. Create a new file called `testing.js`, and insert the [testing.js code from this project](https://google.com).

2. Go back to the terminal, make sure you're in the `backend` directory, and type: 
```
npx hardhat test
```

## Frontend
