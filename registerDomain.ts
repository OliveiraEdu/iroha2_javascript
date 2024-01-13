import { Client, ToriiRequirementsForApiHttp } from '@iroha2/client'
import {
  DomainId,
  EvaluatesToRegistrableBox,
  Executable,
  Expression,
  IdentifiableBox,
  Instruction,
  MapNameValue,
  Metadata,
  NewDomain,
  OptionIpfsPath,
  QueryBox,
  RegisterBox,
  Value,
  VecInstruction,
} from '@iroha2/data-model'

// --snip--
declare const client: Client
declare const toriiRequirements: ToriiRequirementsForApiHttp

async function registerDomain(domainName: string) {
  const registerBox = RegisterBox({
    object: EvaluatesToRegistrableBox({
      expression: Expression(
        'Raw',
        Value(
          'Identifiable',
          IdentifiableBox(
            'NewDomain',
            NewDomain({
              id: DomainId({
                name: domainName, 
              }),
              metadata: Metadata({ map: MapNameValue(new Map()) }),
              logo: OptionIpfsPath('None'),
            }),
          ),
        ),
      ),
    }),
  })

  await client.submitExecutable(
    toriiRequirements,
    Executable('Instructions', VecInstruction([Instruction('Register', registerBox)])),
  )
}

async function ensureDomainExistence(domainName: string) {
  // Query all domains
  const result = await client.requestWithQueryBox(
    toriiRequirements,
    QueryBox('FindAllDomains', null),
  )

  // Display the request status
  console.log('%o', result)

  // Obtain the domain
  const domain = result
    .as('Ok')
    .result.enum.as('Vec')
    .map((x) => x.enum.as('Identifiable').enum.as('Domain'))
    .find((x) => x.id.name === domainName) 

  // Throw an error if the domain is unavailable
  if (!domain) throw new Error('Not found')
}

await ensureDomainExistence('looking_glass')
