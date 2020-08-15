import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package/package.service';
import { Package } from 'src/app/domain/package/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages: Package[];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packageService.getPackageByCountryId("01").subscribe(ps =>
      this.packages = ps)
  }

}
