/*
Ethereum console is a JS based environment. The following are
snippets of common actions one may take within the console.
*/

// Mining commands
miner.start(1);
miner.stop();

// How many blocks are in my blockchain
eth.blockNumer;

// get ether accounts on network
eth.accounts;

web3.fromWei(eth.getBalance(eth.accounts[0]), "ether");

/* 
Create new account with pwd of abc123
Verify account creation by running eth.accounts
 */
personal.newAccount("abc123");

eth.getBalance(eth.accounts[0]);

/*
In order to send funds from one account to another, we need
to unlock the account. Will return boolean value.
*/
personal.unlockAccount(eth.accounts[0], "abc123");

/* 
 Although, just because we've created a transaction and sent it to the network, 
 that doesn't necessarily mean the funds have been transferred. In order for a 
transaction to be processed, it needs to be included, by a miner, in a block.
Will return hash of transaction
 */
eth.sendTransaction({
  from: eth.accounts[0],
  to: eth.accounts[1],
  value: web3.toWei(3, "ether")
});

eth.getTransaction("<HASH_OF_TRANSACTION>");

// Mine transaction
miner.start(1);
miner.stop();

web3.fromWei(eth.getBalance(eth.accounts[0]), "ether");

// Transaction field is updated
// 0x5cf5d6bb0d4f88b62db707b3ef720acd24f72eb71ca51af93fbbae28b29829d8;
eth.getTransaction("<HASH_OF_TRANSACTION>");

/* 
Every transaction has a blockHash. We can read that
blockHash
*/
eth.getBlock("BLOCK_HASH");
