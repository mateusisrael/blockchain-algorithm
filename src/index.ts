import { BlockChain } from "./BlockChain";

const message = {
  content: "I love you"
}
const anotherMessage = {
  constent: "I not love you"
}

const blockChain = new BlockChain(4)

blockChain.addBlock(message)
blockChain.addBlock(anotherMessage)

if(blockChain.isValid()) {
  console.log("This Blockchain is valid 🚀")
} else {
  console.log("This Blockchain is invalid 😿")
}

console.log(blockChain.blocks)