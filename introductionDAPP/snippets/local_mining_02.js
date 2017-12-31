// Open geth console
// ./bin/geth --datadir=./datadir console

eth.accounts;

eth.getBalance("HASH");

/*
Coins are a reward for mining blocks
-> Create a transaction
-> Transactions are grouped into blocks
-> Miners verify blocks
-> Miners get Ether as a reward
-> Ether is created from "nothing"
*/

miner.start(1);
miner.stop();

eth.blockNumber; // Returns number of blocks in chain
eth.accounts;
eth.getBalance(eth.accounts[0]);

/*
wei === one "cent" of ether
*/

// will return balance in ether units
web3.fromWei(eth.getBalance(eth.accounts[0]), "ether");
