"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utxo {
    constructor(txid, outputIndex, address, script, corbes) {
        this.txid = txid;
        this.outputIndex = outputIndex;
        this.address = address;
        this.script = script;
        this.corbes = corbes;
    }
}
exports.default = Utxo;
