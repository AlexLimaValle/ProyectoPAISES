import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
    constructor(private servicesCountries:CountriesService){}

    public countries:Country[] = [];

    recibir(pais:string){
      this.servicesCountries.searchCountries(pais).subscribe(
        (data)=>{
          this.countries = data;
        },
        (error)=>{
          console.log("error");
        }
      );
    }
}
