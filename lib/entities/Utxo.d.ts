export default class Utxo {
    /**
     * Txid of the utxo
     */
    txid: string;
    /**
     * Txout index number of the utxo
     */
    outputIndex: number;
    /**
     * Address
     */
    address: string;
    /**
     * ScriptPubKey
     */
    script: string;
    /**
     * corbes
     */
    corbes: number;
    constructor(txid: string, outputIndex: number, address: string, script: string, corbes: number);
}
