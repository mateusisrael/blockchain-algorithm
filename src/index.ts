import { BlockChain } from "./BlockChain";

const message = {
  content: "I love you"
}
const anotherMessage = {
  constent: "I not love you"
}

const blockChain = new BlockChain()

blockChain.addBlock(message)
blockChain.addBlock(anotherMessage)

console.log(blockChain.blocks)