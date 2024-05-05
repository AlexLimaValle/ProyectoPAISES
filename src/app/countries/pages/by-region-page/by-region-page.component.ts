import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
    constructor(private serviceRegion:CountriesService){}

    public countries:Country[] = [];

    recibir(region:string){
      this.serviceRegion.searchRegion(region).subscribe(
        (data)=>{
          this.countries = data;
        },
        (error)=>{
          console.log("error");
        }
      )
    }
}
