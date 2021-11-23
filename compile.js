const path = require("path")
const fs = require("fs")
const solc = require("solc")

const lotteryPath = path.resolve(__dirname, "contracts", "AuctionV2.sol")
const source = fs.readFileSync(lotteryPath, "utf8")
const input = {
  language: "Solidity",
  sources: {
    "AuctionV2.sol": {
      content: source
    }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"]
      }
    }
  }
}
const res = JSON.parse(solc.compile(JSON.stringify(input)))

module.exports = res?.contracts["AuctionV2.sol"]?.["Auction"]
