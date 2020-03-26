import { Money } from './money.model';

export class BankService {

    money: Money[] = [
        { name: "nickels", amount: 5 },
        { name: "dimes", amount: 3 },
        { name: "quarters", amount: 3},
        { name: "dollars" , amount: 3}
    ]

    getMoney() {
        return this.money;
    }
}