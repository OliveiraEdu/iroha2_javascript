Following the instructions at https://hyperledger.github.io/iroha-2-docs/guide/get-started/javascript.html

```bash
mkdir /home/project/app
cd /home/project/app
apt update
apt install -y curl git
curl -sL https://deb.nodesource.com/setup_20.x | bash -
apt-get install nodejs
npm install -g pnpm
npm init
echo "@iroha2:registry=https://nexus.iroha.tech/repository/npm-group/" > .npmrc
npm i @iroha2/client@5.0.0@5.0.0
npm i @iroha2/data-model@5.0.0
npm i @iroha2/crypto-core
npm i @iroha2/crypto-target-node
npm i @iroha2/crypto-target-web
npm i @iroha2/crypto-target-bundler
npm i hada
npm i tsx -g
npm i node fetch
```

 Running scripts

 ```ts
tsx example.ts
```
Installing pnpm

```
npm install -g pnpm
```


   
