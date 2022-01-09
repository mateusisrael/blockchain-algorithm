// import sha256 from 'crypto-js/sha256';
import { createHash } from 'crypto';

export class Block {
  private _index: number;
  private _timestamp: Date
  private _data: object;
  private _hash: string;
  private _nonce: number
  private _previousHash: string;
  private _dificulty: number

  constructor(index: number, previousHash: string, data: object, dificulty: number) {
    this._index = index
    this._timestamp = new Date();
    this._data = data
    this._previousHash = previousHash
    this._nonce = 0
    this._dificulty = dificulty
    this._hash = this.generateHash()

    this._mine()
  }

  get index() {
    return this._index
  }
  get hash() {
    return this._hash
  }
  get previousHash() {
    return this._previousHash
  }

  public generateHash() {
    const hash = createHash("sha256")
    hash.update(`${this._index}${this._previousHash}${JSON.stringify(this._data)}${this._timestamp}${this._nonce}`)
    const hexHash = hash.digest("hex");
    return hexHash
  }

  private _mine() {
    while(!(/^0*$/.test(this._hash.substring(0, this._dificulty)))) {
      this._nonce++
      this._hash = this.generateHash()
    }
  }
}