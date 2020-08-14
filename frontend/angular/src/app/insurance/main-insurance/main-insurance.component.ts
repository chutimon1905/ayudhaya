import { Component, OnInit } from '@angular/core';
import { CentralStoreService } from 'src/app/service/central-store/central-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  toSummary: boolean = false;

  constructor(private centralStore: CentralStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.toSummary = true;
  }

  confirmInsurance() {
    this.router.navigateByUrl('/traveller');
  }

  backInsurance() {
    this.toSummary = false;
  }

}
