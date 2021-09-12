import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  objectChain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.objectChain.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const val = `( ${value} )`;
    this.objectChain.push(val);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position < 1 || position > this.objectChain.length) {
      this.objectChain = [];
      throw new Error (`You can't remove incorrect link!`);
    } else {
      this.objectChain.splice(position -1, 1);
    } return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.objectChain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const finishObjectChain =  this.objectChain.join(`~~`);
    this.objectChain = [];
    return finishObjectChain;
  }
};
