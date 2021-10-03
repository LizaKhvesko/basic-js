import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if(str.length ===0) return '';
    let result = '';
    let i = 1;
    let number = 1;
    while (i < str.length) {
        if (str[i] === str[i-1])
            number++;
        else {
            if (number !== 1)
                result += number + str[i-1];
            else
                result += str[i-1]
            number = 1;
        }
        i++;
    }
    if (number !== 1) 
        result += number + str[i - 1];
    else 
        result += str[i - 1];
    return result;
}
