import { Block } from "./Block";

const message = {
  from: "123123",
  to: "141444",
  content: "I love you"
}
const block = new Block(1, "1212", message);
console.log(block.hash)
console.log(block.hash)