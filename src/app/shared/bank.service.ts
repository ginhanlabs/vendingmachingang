import { IMoney } from './money.model';
import { Subject } from 'rxjs';

export class BankService {

    moneyChanged =  new Subject<IMoney[]>();

    private insertedMoney: number = 0;
    private money: IMoney;
    private spentMonies : IMoney[];
    private spentMoney: IMoney;

    monies: IMoney[] = [
        { id: 1, name: "Nickel", amount: 5, type: 'coin', value: .05 },
        { id: 2, name: "Dime", amount: 3, type: 'coin', value: .10 },
        { id: 3, name: "Quarter", amount: 3, type: 'coin', value: .25},
        { id: 4, name: "Dollar" , amount: 3, type: 'dollar', value: 1.00}
    ]

 
    resetInsertedMoney() {
        this.insertedMoney = 0;
    }

    getMoneytInserted(): number  {
        return this.insertedMoney;
    }

    getMoney() {
        this.spentMonies = [...this.monies];
        return this.spentMonies;
    }

    moneySpent(money:IMoney) {
        if (money.amount > 0 ) {
            this.insertedMoney += money.value;
            this.spentMonies.find(m => {
                if (m.id === money.id && m.amount > 0) {
                   m.amount--;
                }
            });
            this.moneyChanged.next( this.spentMonies);
        }
    }
}