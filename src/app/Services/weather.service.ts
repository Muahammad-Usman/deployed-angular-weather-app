import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Weather } from './weather';
import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'  
})
export class WeatherService {

  private location="London";
  private key=environment.key;
  private apiUrl = `${environment.baseUrl}?key=${this.key}&q=${this.location}&aqi=no`;

  // getcity(name:string) {
  //   this.location=name;
  // }

  constructor(private http: HttpClient) { }  

  getWeather(name:string): Observable<Weather> {
    this.apiUrl=`${environment.baseUrl}?key=${this.key}&q=${name}&aqi=no`
    return this.http.get<Weather>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('WeatherService - Error:', error);
    return throwError('An error occurred while fetching the weather data.');
  }

  

  // deletProducts(product:Weather):Observable<Weather>{
  //   const url =`${this.apiUrl}/${product.name}`;
  //   return this.http.delete<Weather>(url);
  // }
}
