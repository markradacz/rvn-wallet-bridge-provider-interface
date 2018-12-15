export default class Output {
    /**
     * The hex format of lock script.
     */
    lockScript: string;
    /**
     * The value transferred to the lock script in corbe.
     */
    amount: number;
    constructor(lockScript: string, amount: number);
}
