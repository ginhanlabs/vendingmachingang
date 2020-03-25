import { ISoda } from './Soda.model'

export class SodaService {

    sodas:ISoda[] = [
        {name: 'Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {name: 'Sprite', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {name: 'Ice Tea', price: 2.00, stock: 5, img : 'assets/img/soda.jpg'},
        {name: 'Pepsi', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {name: 'Diet Coke', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {name: 'Fanta', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {name: 'Lemonade', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'},
        {name: 'Root Beer', price: 1.50, stock: 5, img : 'assets/img/soda02.jpg'},
        {name: 'Ginger Ale', price: 1.50, stock: 5, img : 'assets/img/soda.jpg'}
    ];

    getSodas() {
        return this.sodas;
    }
}
    