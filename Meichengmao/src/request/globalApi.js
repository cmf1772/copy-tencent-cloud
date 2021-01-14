// 获取顶层对象
var getGlobal = function () {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw new Error('unable to locate global object')
}
const domain = 'http'
// const devHost = 'ydyss.cptchina.cn'
const devHost = 'www.bjxmqy.com'
const devPort = '9501'
const localHost = '192.168.2.231'
const localPort = '8080'
// const proHost = 'ydyss.cptchina.cn'
//
const proPort = '3370'
const devUrl = domain + '://' + devHost + ':' + devPort
// const proUrl = domain + '://' + proHost + ':' + proPort
const localUrl = domain + '://' + localHost + ':' + localPort

module.exports = {
  domain: domain,
  devPort: devPort,
  proPort: proPort,
  localPort: localPort,
  localHost: localHost,
  devUrl: devUrl,
  localUrl: localUrl,
  // proUrl: proUrl
}
