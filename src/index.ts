import { Block } from "./Block";
import { BlockChain } from "./BlockChain";
import { createHash } from 'crypto';

const message = {
  content: "I love you"
}
const anotherMessage = {
  constent: "I not love you"
}

const blockChain = new BlockChain()

blockChain.addBlock(message)
blockChain.addBlock(anotherMessage)

const block = new Block(1, '1212', message)
console.log(block.hash)
console.log(block.hash)
console.log(block.generateHash())
console.log(block.generateHash())

// console.log(blockChain.blocks)
// console.log(blockChain.isValid())