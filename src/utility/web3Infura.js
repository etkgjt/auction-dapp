import Web3 from "web3"
window.ethereum.enable()
const options = {
  // Enable auto reconnection
  reconnect: {
    auto: true,
    delay: 5000, // ms
    maxAttempts: 5,
    onTimeout: false
  }
}

const provider = new Web3.providers.WebsocketProvider(
  "wss://rinkeby.infura.io/ws/v3/5ae2eff463b7467eb7cba7a5638ede58",
  {
    // @ts-ignore
    clientConfig: {
      keepalive: true,
      keepaliveInterval: 60000
    }
  }
)

const web3_infura = new Web3(provider)

export default web3_infura
