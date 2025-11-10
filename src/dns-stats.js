const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsMap = new Map()

  domains.forEach(domain => {
    const strArr = domain.split('.').toReversed()
    let dns = ''

    strArr.forEach((str) => {
      dns += '.' + str
      if (!domainsMap.has(dns)) {
        domainsMap.set(dns, 1)
      } else {
        const domainCount = domainsMap.get(dns)
        domainsMap.set(dns, domainCount + 1)
      }
    })
  });

  return Object.fromEntries(domainsMap)
}

module.exports = {
  getDNSStats
};
