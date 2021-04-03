import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMoney } from '../shared/money.model';
import { BankService } from '../shared/bank.service';
import {  Subscription } from 'rxjs';
import { SodaService } from '../shared/soda.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit, OnDestroy {

  bankSubscription: Subscription;
  sodaSubscription: Subscription;
  moneyInserted: number = 0;
  money: IMoney[];

  constructor(private bankService: BankService, private sodaService: SodaService ) { }
  

  ngOnInit(): void {
    this.money = this.bankService.getMoney();
    this.sodaSubscription = this.sodaService.sodaStockUpdate.subscribe(sodaList => {
      this.clearAmountInserted();
    })
  }

  insertMoney(moneyInserted: IMoney){
    if (moneyInserted.amount > 0){
      this.moneyInserted += moneyInserted.value;
      this.bankService.moneySpent(moneyInserted);
      this.bankSubscription =this.bankService.moneyChanged
      .subscribe( money =>{
        // TODO update the coin amount
        console.log(JSON.stringify(money));
      });
    };
  }

  
  clearAmountInserted():void {
      this.moneyInserted = 0;
  }

  onCancel(){
    this.clearAmountInserted();
    this.bankService.refund();
  }

  ngOnDestroy(): void {
    this.bankSubscription.unsubscribe();
  }
}
