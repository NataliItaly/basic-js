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
function getDNSStats( domains ) {
  const domainArr = domains.flatMap((el, i, arr) => {
    return el.split('.').reverse().map((item, i, arr) => '.' + arr.slice(0, i + 1).join('.'));
  });
  const res = {};
  for (let sub of domainArr) {
    res[sub] = (res[sub] || 0) + 1;
  }
  return res;
}

module.exports = {
  getDNSStats
};
