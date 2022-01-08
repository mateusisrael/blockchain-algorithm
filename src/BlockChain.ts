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

  isValid() {}
}