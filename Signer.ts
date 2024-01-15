import { cryptoTypes } from '@iroha2/crypto-core'
import { Signer } from '@iroha2/client'
import { datamodel } from '@iroha2/data-model'

// Key pair from previous step
declare const keyPair: cryptoTypes.KeyPair

const acc = datamodel.AccountId({
  name: 'alice',
  domain_id: datamodel.DomainId({
    name: 'wonderland',
  }),
})

const signer = new Signer(acc, keyPair)



