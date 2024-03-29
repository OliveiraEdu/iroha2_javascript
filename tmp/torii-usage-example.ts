import { Torii } from '@iroha2/client'
import { VersionedSignedQueryRequest } from '@iroha2/data-model'

// --snip--
declare const query: VersionedSignedQueryRequest

const result = await Torii.request(
  {
    fetch,
    apiURL: 'http://127.0.0.1:8080',
  },
  query,
)