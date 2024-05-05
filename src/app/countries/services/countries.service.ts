import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap,map,of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
    constructor(private http: HttpClient) { }
    
    private apiUrl:string = 'https://restcountries.com/v3.1'

    searchCapital(term:string):Observable<Country[]>{
        const url:string = `${this.apiUrl}/capital/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(error => {
                console.log(error);
                return of([]);
            })
        );
    }

    searchCountries(term:string){
        const url:string = `${this.apiUrl}/name/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(error=>{
                console.log(error);
                return of([]);
            })
        )
    }

    searchRegion(term:string){
        const url:string = `${this.apiUrl}/region/${term}`;
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(error=>{
                console.log(error);
                return of([]);
            })
        )
    }

    searchCountryAlphaCode(code:string):Observable<Country|null>{
        const url:string = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(
            map(countries=>countries.length>0 ? countries[0]:null),
            catchError(error=>{
                console.log(error);
                return of(null);
            })
        )
    }
}

