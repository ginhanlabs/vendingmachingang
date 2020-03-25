import { Component, OnInit } from '@angular/core';
import { ISoda } from '../shared/Soda.model';
import { SodaService } from '../shared/soda.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  sodaList:ISoda[];

  constructor(private sodaService : SodaService) { }

  ngOnInit(): void {
    //TODO use observables later
    this.sodaList =  this.sodaService.getSodas();
  }

}
