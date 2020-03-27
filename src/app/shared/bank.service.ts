import { Money } from './money.model';

export class BankService {

    money: Money[] = [
        { id: 1, name: "Nickel", amount: 5, type: 'coin', value: 5 },
        { id: 2, name: "Dime", amount: 3, type: 'coin', value: 10 },
        { id: 3, name: "Quarter", amount: 3, type: 'coin', value: 25},
        { id: 4, name: "Dollar" , amount: 3, type: 'dollar', value: 100}
    ]

    getMoney() {
        return this.money;
    }
}