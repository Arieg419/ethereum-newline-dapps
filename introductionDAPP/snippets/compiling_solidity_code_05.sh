solcjs --bin counter.sol

solcjs --abi counter.sol

./bin/geth --datadir=./datadir console

cat counter_sol_Counter.bin | pbcopy

var counterCode = "6060604052341561000f57600080fd5b600160008190555060c9806100256000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680636d4ce63c14604e578063d09de08a146074575b600080fd5b3415605857600080fd5b605e6086565b6040518082815260200191505060405180910390f35b3415607e57600080fd5b6084608f565b005b60008054905090565b6001600054016000819055505600a165627a7a72305820b90fa5c9285c65^C511a1e615c73b88688f980ed8ff7c261626091ddf58aa18c0029"

personal.unlockAccount(eth.accounts[0], "abc123")

# This will execute a contrat creation on ETH network.
# The return value will be the hash id of a contract.
# 
eth.sendTransaction(
    {
        from: eth.accounts[0],
        data: "0x" + counterCode,
        gas: 1000000
    },
    function(err, tx) {
        console.log(err, tx);
    }
);

# Permanent address of contract
var contractAddr = "0xfa0E7b2e9E698baB6A069b21F0a9E8336fDBc073"

# getCode will return no contracts b/c they haven't been mined yet!
eth.getCode(contractAddr)

txpool.status
# should return pending

miner.start(1)
miner.stop()

# returns contract in byte code
eth.getCode(contractAddr) 