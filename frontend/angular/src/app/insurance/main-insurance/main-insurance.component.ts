import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-insurance',
  templateUrl: './main-insurance.component.html',
  styleUrls: ['./main-insurance.component.css']
})
export class MainInsuranceComponent implements OnInit {

  toSummary: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onConfirm() {
    this.toSummary = true;
  }

}
