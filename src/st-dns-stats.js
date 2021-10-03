import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
 let result = {}
  for (let i=0; i<domains.length; i++) {
    let number=1;
    let final = domains[i].split('.').reverse()
    for (let j of final) {
      let item = `.${ final.slice(0, number).join('.')}`
      number++;
       (result[item]) ? result[item]++ : result[item] = 1
    }
    }
  return result;
}
