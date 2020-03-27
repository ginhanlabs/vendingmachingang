import { Component, OnInit } from '@angular/core';
import { Money } from '../shared/money.model';
import { BankService } from '../shared/bank.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  moneyInserted: number = 0;
  money: Money[];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.money = this.bankService.getMoney();
  }

  insertMoney(moneyInserted: number){
    this.moneyInserted = this.moneyInserted * 100;
    this.moneyInserted +=moneyInserted;
    this.moneyInserted = this.moneyInserted / 100;
  }

  onCancel(){
    this.moneyInserted = 0;
  }
}
