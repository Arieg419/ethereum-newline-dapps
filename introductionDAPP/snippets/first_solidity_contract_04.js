/*
Let’s write and deploy our first Ethereum smart contract in Solidity.
The process looks like this:
we write our contract (in a high level language)
compile it
and deploy it to the network
and after it’s been deployed we can interact with it
In order to write contracts on Ethereum, it’s really important to understand the context in which they are run.
The first thing that we’ll start with is the Ethereum Virtual Machine, or EVM for short.
The EVM is a low-level, assembly-like programming environment. It can perform arbitrary computations, put data in storage, read that data out, etc.
When we write code for Ethereum, we generally don’t write the bytecode directly. Instead we use a higher-level language that compiles down to these basic operations.
But under the hood, it’s this EVM bytecode that gets run.
*/

/*
1) Write the contract in Solidity
2) Compile to EVM bytecode
3) Deploy to Ethereum Network
4) Interact (run it)
*/

/*
EVM 
-> Assembly-like programming environment
-> Computation
-> Storage
** Different versions of the compiler could emit different bytecode

Every node runs the code (to verify correctness)
This means our data isn't private (!)
We have to pay a premium for our code to run
-> Contracts only run reactively, ie. in response to a transaction.
*/

/*
In Count contract the value of `count` will be stored on every node
Storage isn't free!
How do we create instances of Solidity contracts?
We'll submit a transaction to Ethereum that creates it.

-> Contracts can manage data and funds.
-> Contract code is immutable.
-> b/c we have our own local ether node, reading data is free.

To change `count` we must
1) Create a transaction that calls increment
2) This transaction is included in a block
3) The miners verify the block
4) `count` state is changed.
*/

solcjs --bin counter.sol 
cat counter_sol_Counter.bin // save this in to variable like so
/*
In geth console 
var counterCode = "6060604052341561000f57600080fd5b600160008190555060c9806100256000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14604e578063d09de08a146074575b600080fd5b3415605857600080fd5b605e6086565b6040518082815260200191505060405180910390f35b3415607e57600080fd5b6084608f565b005b60008054905090565b6001600054016000819055505600a165627a7a72305820b90fa5c9285c65^C511a1e615c73b88688f980ed8ff7c261626091ddf58aa18c0029"
personal.unlockAccount(eth.accounts[0], "abc123")

*/
solcjs --abi counter.sol

// GENERATE BOTH AT THE SAME TIME
solcjs --bin --abi counter.sol

