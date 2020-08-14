import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { MainInsuranceComponent } from './main-insurance/main-insurance.component';
import { CountryComponent } from './country/country.component';
import { PackageComponent } from './package/package.component';
import { PickDateComponent } from './pick-date/pick-date.component';
import { InsuranceSummaryComponent } from './insurance-summary/insurance-summary.component';
import { NbCardModule, NbLayoutModule, NbUserModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [
    MainInsuranceComponent,
    CountryComponent,
    PackageComponent,
    PickDateComponent,
    InsuranceSummaryComponent,
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbUserModule,
    NbSidebarModule
  ],
})
export class InsuranceModule { }
