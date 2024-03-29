import {
  ToriiRequirementsForApiHttp,
  ToriiRequirementsForApiWebSocket,
  ToriiRequirementsForTelemetry,
} from '@iroha2/client'
import { adapter as WS } from '@iroha2/client/web-socket/native'

const toriiRequirements: ToriiRequirementsForApiHttp &
  ToriiRequirementsForApiWebSocket &
  ToriiRequirementsForTelemetry = {
  apiURL: 'http://10.0.100:8080',
  telemetryURL: 'http://10.0.0.100:8081',
  ws: WS,
  fetch:
    // passing globally available `fetch`, but binding it to `window`
    // to avoid `TypeError: "'fetch' called on an
    //           object that does not implement interface Window."`
    fetch.bind(window),
}