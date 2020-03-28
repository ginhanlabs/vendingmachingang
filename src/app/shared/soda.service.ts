import { ISoda } from './Soda.model'
import { Subject } from 'rxjs';

export class SodaService {

    sodaChanged = new Subject();

    sodasBought = [];

    sodas:ISoda[] = [
        {id: 1, name: 'Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 2, name: 'Sprite', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 3, name: 'Ice Tea', price: 2.00, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 4, name: 'Pepsi', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 5, name: 'Diet Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 6, name: 'Fanta', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 7, name: 'Lemonade', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {id: 8, name: 'Root Beer', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {id: 9, name: 'Ginger Ale', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'}
    ];

    getSodas() {
        return this.sodas;
    }

    buySoda(sodasBought: ISoda) {
        this.sodasBought.push(sodasBought);
        let soda = {
            name: sodasBought.name
        }
        this.sodaChanged.next(soda);
    }
}
    