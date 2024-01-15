' ' ' 
tsx Signer.ts 
/home/project/app/Signer.ts:45
  fetch: fetch.bind(window),
                    ^


ReferenceError: window is not defined
    at <anonymous> (/home/project/app/Signer.ts:45:21)
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at async loadESM (node:internal/process/esm_loader:28:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)

Node.js v20.11.0
' ' ' 
