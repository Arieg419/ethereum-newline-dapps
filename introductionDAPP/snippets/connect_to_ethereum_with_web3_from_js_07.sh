./bin/geth --datadir=./datadir --nodiscover --rpc --rpcapi "db, personal, eth, net, web3" --rpccorsdomain='*' --rpcaddr="localhost" --rpcport 8545 console
# This will launch geth in console in our shell, but also launch an RPC server
# in the background which our web browser can connect to.

