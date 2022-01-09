// import sha256 from 'crypto-js/sha256';
import { createHash } from 'crypto';

export class Block {
  private _index: number;
  private _timestamp: Date
  private _data: object;
  private _hash: string;
  private _previousHash: string;

  constructor(index: number, previousHash: string, data: object) {
    this._index = index
    this._timestamp = new Date();
    this._data = data
    this._previousHash = previousHash
    this._hash = this.generateHash()
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
    hash.update(`${this._index}${this._previousHash}${JSON.stringify(this._data)}${this._timestamp}`)
    const hexHash = hash.digest("hex");
    return hexHash
  }
}