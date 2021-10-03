import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  result: '',

  getLength() {
     return this.arr.length;
  },

  addLink(value='') {
     this.arr.push(`( ${value} )`);
     return this;
  },

  removeLink(position){
    if (!this.arr[position - 1] || !Number.isInteger(position)) {
      this.arr.length = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
    },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.result = this.arr.join('~~');
    this.arr.length = 0;
    return this.result;
  }
};
