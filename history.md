Following the instructions at https://hyperledger.github.io/iroha-2-docs/guide/get-started/javascript.html

```bash
mkdir /home/project/app
cd /home/project/app
apt update
apt install -y curl git
curl -sL https://deb.nodesource.com/setup_20.x | bash -
apt-get -y install nodejs
npm install -g pnpm
npm init
echo "@iroha2:registry=https://nexus.iroha.tech/repository/npm-group/" > .npmrc
pnpm add @iroha2/client@5.0.0@5.0.0
pnpm add @iroha2/data-model@5.0.0
pnpm add @iroha2/crypto-core
pnpm add @iroha2/crypto-target-node
pnpm add @iroha2/crypto-target-web
pnpm add @iroha2/crypto-target-bundler
pnpm add hada
pnpm add tsx -g
pnpm add node fetch
```

 Running scripts

 ```ts
tsx example.ts
```
Installing pnpm

```
npm install -g pnpm
```


   
