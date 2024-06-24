import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search!:string;
  isCollapsed = true;
  searchQuery: string = '';
  @Output() city  = new EventEmitter();

  constructor(private weatherservice: WeatherService){}
  

  onSubmit(): void {
    console.log(this.searchQuery);
    this.city.emit(this.searchQuery);
  }


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  SearchCity(name:string){
    console.log(name);
  }


  AddCity(){
    console.log("Working");
  }

}
