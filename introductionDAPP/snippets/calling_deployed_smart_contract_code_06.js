/*
To use a smart contract we will create a JS proxy.
The ABI describes the interface.

In order to get an instance of our smart contract we will
1) Parse ABI (into JSON)
2) Create a JS contract "class"
3) Instantiate that class (at an andress)
*/

// Step 1:
// cat counter_sol_Counter.abi | pbcopy
// In geth console -> SINGLE QUOTES!
var abi = JSON.parse("<COPIED_ABI>");
// Log ABI in console to verify

// Step 2: (Still in geth console)
var Counter = eth.contract(abi);

//Step 3:
var counter = Counter.at(contractAddr);
counter.get();

counter.increment(); // does not work!!!

personal.unlockAccount(eth.accounts[0], "abc123");
counter.increment.sendTransaction({
  from: eth.accounts[0]
});

counter.get(); // still 1, we need to mine!

miner.start();
miner.stop();

counter.get(); // 2
