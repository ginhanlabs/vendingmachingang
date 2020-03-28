import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMoney } from '../shared/money.model';
import { BankService } from '../shared/bank.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit, OnDestroy {

  bankSubscription: Subscription;
  moneyInserted: number = 0;
  money: IMoney[];

  constructor(private bankService: BankService ) { }

  ngOnInit(): void {
    this.money = this.bankService.getMoney();
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

  onCancel(){
    this.moneyInserted = 0;
    this.bankService.resetInsertedMoney();
  }

  ngOnDestroy(): void {
    this.bankSubscription.unsubscribe();
  }
}
