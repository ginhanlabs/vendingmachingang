import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SodaService } from './shared/soda.service';
import { BankComponent } from './bank/bank.component';
import { BankService } from './shared/bank.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    BankComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SodaService, BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
