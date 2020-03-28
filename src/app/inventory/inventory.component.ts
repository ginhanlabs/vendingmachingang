import { Component, OnInit } from '@angular/core';
import { ISoda } from '../shared/Soda.model';
import { SodaService } from '../shared/soda.service';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  canBuy: boolean = true;
  moneyInserted: number;
  sodaList:ISoda[];

  constructor(private sodaService : SodaService, private bankService: BankService) { }

  ngOnInit(): void {
    //TODO use observables later
    this.sodaList =  this.sodaService.getSodas();
  }

  onBuy(sodaSelected: ISoda):void {
    // have money
    this.moneyInserted = this.bankService.getMoneytInserted();
    this.sodaList.find(s => {
      if (s.price === this.moneyInserted && s.id === sodaSelected.id) {
        this.canBuy = true;
        this.sodaService.buySoda(sodaSelected);
        console.log(" inserted " + this.moneyInserted  + ' soda = ' + sodaSelected.price);
      } else {
        this.canBuy = false;
        console.log(" can't buy soda = " + sodaSelected.price);
      }
    })
  }

}
