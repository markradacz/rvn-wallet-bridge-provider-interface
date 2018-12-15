export default class Utxo {
  /**
   * Txid of the utxo
   */
  public txid: string

  /**
   * Txout index number of the utxo
   */
  public outputIndex: number

  /**
   * Address
   */
  public address: string

  /**
   * ScriptPubKey
   */
  public script: string

  /**
   * Corbes
   */
  public corbes: number

  constructor(txid: string, outputIndex: number, address: string, script: string, corbes: number) {
    this.txid = txid
    this.outputIndex = outputIndex
    this.address = address
    this.script = script
    this.corbes = corbes
  }
}
