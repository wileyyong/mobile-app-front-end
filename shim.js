// eslint-disable-next-line no-underscore-dangle
if (typeof __dirname === 'undefined') global.__dirname = '/'
// eslint-disable-next-line no-underscore-dangle
if (typeof __filename === 'undefined') global.__filename = ''

if (typeof process === 'undefined') {
  // eslint-disable-next-line global-require
  global.process = require('process')
} else {
  // eslint-disable-next-line global-require
  const bProcess = require('process')

  // eslint-disable-next-line no-restricted-syntax
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p]
    }
  }
}

process.browser = false
// eslint-disable-next-line global-require
if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer

// global.location = global.location || { port: 80 }
const isDev = typeof __DEV__ === 'boolean' && __DEV__

// eslint-disable-next-line dot-notation
process.env['NODE_ENV'] = isDev ? 'development' : 'production'

if (typeof localStorage !== 'undefined') {
  // eslint-disable-next-line no-undef
  localStorage.debug = isDev ? '*' : ''
}

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
// require('crypto')
