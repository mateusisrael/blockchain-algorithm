// import sha256 from 'crypto-js/sha256';
import { createHash } from 'crypto';

export interface IBlock {
  index: number,
  timestamp: Date,
  hash: string,
  previousHash: string
  data: Object
}

export class Block implements IBlock {
  public timestamp: Date
  public hash: string;
  constructor(
    public index: number,
    public previousHash: string,
    public data: object,
  ) {
    this.timestamp = new Date();
    this.hash = this.generateHash()
  }

  private generateHash() {
    const hash = createHash("sha256")
    hash.update(`${this.index}${this.previousHash}${JSON.stringify(this.data)}${this.timestamp}`)
    const hexHash = hash.digest("hex");
    return hexHash
  }
}