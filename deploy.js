const data = require("./compile")
module.exports = {
  deploy: function () {
    return {
      abi: data?.abi,
      bytecode: data?.evm?.bytecode?.object
    }
  }
}
