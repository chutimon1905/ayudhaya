import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country/country.service';
import { Country } from 'src/app/domain/country/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countries = countries
    })
  }

}
