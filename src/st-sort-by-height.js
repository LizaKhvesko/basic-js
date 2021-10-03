import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
   let index = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] <0) {
      index.push(i)
    }
  }
  if (index.length===0) {return arr.sort((a,b)=>a-b)}
  arr = arr.filter(elem => elem>0).sort((a,b)=>a-b)
  for (let i=0; i<index.length;i++) {
    arr.splice(index[i],0,-1)
  }
 return arr
}
