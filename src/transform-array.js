import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!") 

 let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let result = [];
  
  let mix = [doubleNext, doublePrev, discardNext, discardPrev]
  
  for (let i=0; i<arr.length; i++) {
    if(!mix.includes(arr[i])) {
      result.push(arr[i])
     }
    else {
      if (arr[i] === doubleNext) {
      if (i + 1 < arr.length) result.push(arr[i + 1]);
    }
      if (arr[i] === doublePrev) {
       if (arr[i - 2] !== discardNext &&  i - 1 >= 0) result.push(arr[i - 1]);
      }
      
      if (arr[i] === discardNext) {
          i++
      }
      
       if (arr[i] === discardPrev) {
       if (arr[i - 2] !== discardNext) result.pop();
      }
         
    }
    }
    
   return result;
}
