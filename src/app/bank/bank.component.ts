import { Component, OnInit } from '@angular/core';
import { Money } from '../shared/money.model';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  money: Money[];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.money = this.bankService.getMoney();
  }

}
