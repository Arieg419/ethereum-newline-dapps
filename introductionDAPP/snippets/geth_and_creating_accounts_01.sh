/*
We're creating a private isolated test network.
We're creating our own blockchain.

Test DB is to ProductionDB
as
Local Network is to Public Ethereum Network

For our private node we are not joining the production 
Ethereum network. We’re not going to download the history 
of everything that has happened in Ethereum thus far. 
Instead, we’re going to start our own private network. 
We’re going to start with a clean slate.

This clean slate means that we are creating our own blockchain. 
I know that we haven’t talked about what a blockchain is or 
how it works, but we will. For now, just think of it like your 
test database and your production database – you can’t just 
merge your test database into your production database and 
expect it to work.
s
Similarly, changes to our local Ethereum blockchain will have
no effect on the production Ethereum network.

We’re going to configure our local test blockchain by using 
this configuration file, genesis.json
*/

# Init node on local network
./bin/geth --datadir=./datadir init genesis.json
ls
tree datadir

# Let's create an account
./bin/geth --datadir=./datadir account new
# 660ca54d39ac1da7fbec30100af9a2844c935bfa
# abc123

# Check accounts
./bin/geth --datadir=./datadir account list
