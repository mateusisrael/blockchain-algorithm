import { Block } from "./Block"

export class BlockChain {
  private _index: number
  public blocks: Block[]
  constructor() {
    this._index = 0
    this.blocks = []
  }

  get index() {
    return this._index
  }

  addBlock(data: Object) {
    const previousHash = this.getPreviousHash()
    const block = new Block(1, previousHash, data)
    
    this._index++
    this.blocks.push(block)
  }

  private getPreviousHash() {
    const fakeHash = "0000000000000000000000000000000000000000000000000000000000000000"
    if(this._index === 0) return fakeHash
    return this.blocks[this._index-1].hash
  }

  isValid(): boolean | undefined {
    for(let i = 0; i < this.blocks.length; i++) {
      const currentBlock = this.blocks[i]
      const previousBlock = this.blocks[i-1]

      // if(i > 0) {
        // checar se o hash do bloco atual é válido
      if(currentBlock.hash !== currentBlock.generateHash()) {
        console.log(currentBlock.hash)
        console.log(currentBlock.generateHash())
        console.log(currentBlock.generateHash())
        console.log("1")
        return false
      }

      // checar se o previousHash do bloco atual é igual ao hash do bloco anterior à ele no array.
      if(i > 1 && currentBlock.previousHash !== previousBlock.hash) {
        console.log("2")
        return false
      }
      
      // checar se o bloco está na posição correta
      if(i > 0 && currentBlock.index !== previousBlock.index+1) {
        console.log("3")
        return false
      }
      // }
    }
    return true

  }
}