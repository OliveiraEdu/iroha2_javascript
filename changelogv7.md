
  ```ts
  import { datamodel } from '@iroha2/data-model'

  const acc = datamodel.AccountId({
    name: 'alice',
    domain_id: datamodel.DomainId({
      name: 'wonderland',
    }),
  })
  ```
