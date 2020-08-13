import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaintransactionComponent } from './maintransaction/maintransaction.component';
2;

@NgModule({
  declarations: [MaintransactionComponent],
  imports: [CommonModule, TransactionRoutingModule],
})
export class TransactionModule {}
