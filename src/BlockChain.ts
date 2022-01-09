import { Block } from "./Block"

export class BlockChain {
  private _index: number
  private _blocks: Block[]
  private _dificulty: number
  constructor(dificulty = 1) {
    this._index = 0
    this._blocks = []
    this._dificulty = dificulty;
  }

  get index() {
    return this._index
  }
  get blocks() {
    return this._blocks
  }
  get dificulty() {
    return this._dificulty
  }

  addBlock(data: Object) {
    const previousHash = this.getPreviousHash()
    const block = new Block(this._index, previousHash, data, this._dificulty)
    
    this._index++
    this._blocks.push(block)
  }

  private getPreviousHash() {
    const fakeHash = "0000000000000000000000000000000000000000000000000000000000000000"
    if(this._index === 0) return fakeHash
    return this._blocks[this._index-1].hash
  }

  isValid(): boolean | undefined {
    for(let i = 0; i < this._blocks.length; i++) {
      const currentBlock = this._blocks[i]
      const previousBlock = this._blocks[i-1]


      // checar se o hash do bloco atual é válido
      if(currentBlock.hash !== currentBlock.generateHash()) {
        return false
      }

      // checar se o previousHash do bloco atual é igual ao hash do bloco anterior à ele no array.
      if(i > 1 && currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
      
      // checar se o bloco está na posição correta
      if(i > 0 && currentBlock.index !== previousBlock.index+1) {
        return false
      }
    }
    return true

  }
}