import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SodaService } from '../shared/soda.service';
import { ISoda } from '../shared/Soda.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  sodaPurchasedSubscription: Subscription;
  cartItems = [];

  constructor(private sodaService: SodaService) { }

  ngOnInit(): void {
    this.sodaPurchasedSubscription = this.sodaService.sodaPurchased
      .subscribe(s => {
        this.cartItems.push(s);
      })
  }

  ngOnDestroy(){
    this.sodaPurchasedSubscription.unsubscribe();
  }

}
