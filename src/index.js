const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const ArisenApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  ArisenApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change ArisenApi.Testnet(..) to just ArisenApi(..)')
      return ArisenApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change ArisenApi.Localnet(..) to just ArisenApi(..)')
      return ArisenApi(config)
    }
  }
)

module.exports = ArisenApi
