import { crypto } from '@iroha2/crypto-target-node'
import { cryptoTypes } from '@iroha2/crypto-core'
import { Signer } from '@iroha2/client'
import { AccountId, DomainId } from '@iroha2/data-model'
import {
  ToriiRequirementsForApiHttp,
  ToriiRequirementsForApiWebSocket,
  ToriiRequirementsForTelemetry,
} from '@iroha2/client'
import { adapter as WS } from '@iroha2/client/web-socket/native'
import { Client, Signer, ToriiRequirementsForApiHttp } from '@iroha2/client'
import { Executable } from '@iroha2/data-model'

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

const accountId = AccountId({
  // Account name
  name: 'alice',
  // The domain where this account is registered
  domain_id: DomainId({
    name: 'wonderland',
  }),
})

const signer = new Signer(accountId, keyPair)


// Define Torii requirements
const toriiRequirements: ToriiRequirementsForApiHttp &
  ToriiRequirementsForApiWebSocket &
  ToriiRequirementsForTelemetry = {
  apiURL: 'http://10.0.0.100:8080',
  telemetryURL: 'http://10.0.0.100:8081',
  ws: WS,
  fetch: typeof window !== 'undefined' ? fetch.bind(window) : fetch,
}


// --snip--
declare const signer: Signer
declare const toriiRequirements: ToriiRequirementsForApiHttp

const client = new Client({ signer })

// `Client` will sign & wrap `Executable` into `VersionedSignedTransaction`
const exec: Executable = null; // or some default value
await client.submitExecutable(toriiRequirements, exec);


