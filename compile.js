const path = require("path")
const fs = require("fs")
const solc = require("solc")

const lotteryPath = path.resolve(__dirname, "", "Bid.sol")
const source = fs.readFileSync(lotteryPath, "utf8")
const input = {
  language: "Solidity",
  sources: {
    "Bid.sol": {
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

module.exports = res?.contracts["Bid.sol"]?.["BidGame"]
