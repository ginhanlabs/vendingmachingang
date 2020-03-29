import { ISoda } from './Soda.model'
import { Subject } from 'rxjs';

export class SodaService {

    sodaPurchased = new Subject();
    sodaStockUpdate = new Subject();

    sodasBought = [];

    sodaInventory : ISoda[] = [];
    sodas:ISoda[] = [
        {id: 1, name: 'Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 2, name: 'Sprite', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 3, name: 'Ice Tea', price: 2.00, stock: 1, img : 'assets/img/soda.jpg'},
        {id: 4, name: 'Pepsi', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 5, name: 'Diet Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 6, name: 'Fanta', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 7, name: 'Lemonade', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 8, name: 'Root Beer', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 9, name: 'Ginger Ale', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'}
    ];

    getSodas() {
        this.sodaInventory = [...this.sodas];
        return this.sodas;
    }

    buySoda(sodaBought: ISoda) {
        this.sodaInventory.forEach(s => {
            if (s.id === sodaBought.id) {
               s.stock --;
            }
        });

        this.sodasBought.push(sodaBought);
        let soda = {
            name: sodaBought.name
        }
       this.sodaPurchased.next(soda);
       this.sodaStockUpdate.next(this.sodaInventory);
    }
}
    