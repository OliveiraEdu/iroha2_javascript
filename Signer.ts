import { cryptoTypes } from '@iroha2/crypto-core'
import { Signer } from '@iroha2/client'
import { datamodel } from '@iroha2/data-model'
import { crypto } from '@iroha2/crypto-target-node'

// Define key pair using crypto library
const keyPair = crypto.KeyPair.fromJSON({
  public_key: 'ed0120e555d194e8822da35ac541ce9eec8b45058f4d294d9426ef97ba92698766f7d3',
  private_key: {
    digest_function: 'ed25519',
    payload:
      'de757bcb79f4c63e8fa0795edc26f86dfdba189b846e903d0b732bb644607720e555d194e8822da35ac541ce9eec8b45058f4d294d9426ef97ba92698766f7d3',
  },
})

// Key pair from previous step
declare const keyPair: cryptoTypes.KeyPair

// Define account ID
const acc = datamodel.AccountId({
  name: 'alice',
  domain_id: datamodel.DomainId({
    name: 'wonderland',
  }),
})

// Create a signer with the defined account ID and key pair
const signer = new Signer(acc, keyPair)

// Print messages for monitoring each phase of execution
console.log('Key pair created:', keyPair);
console.log('Account ID created:', acc);
console.log('Signer created:', signer);
