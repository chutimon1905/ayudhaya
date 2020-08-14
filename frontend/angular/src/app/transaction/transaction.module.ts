import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaintransactionComponent } from './maintransaction/maintransaction.component';
import { NbCardModule, NbLayoutModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [MaintransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbUserModule,
  ],
})
export class TransactionModule {}
