import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/Services/weather';
import { WeatherService } from 'src/app/Services/weather.service';


@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  Weather1!:Weather;
  Weather2!:Weather;
  Weather4!:Weather;
  city1:string ='London';
  city2:string='Karachi';
  Weather3:Weather[]=[];
  
  i:number=0;
  cites:string[]=[];
  isCelsius: boolean = true;

  constructor(private weatherservice : WeatherService){}
  

  async too(event: any){
    console.log(event);

    this.cites[this.cites.length]=event;
    for(let s = this.cites.length-1 ; s < this.cites.length ; s++){
      // console.log(this.cites[s],"asdasd");

      this.weatherservice.getWeather(event).subscribe(data=>{
        this.Weather4=data
        this.Weather3[s] = this.Weather4;
        // console.log(this.Weather3[s]);

        // for(let s = 0 ; s < this.cites.length ; s++){
        //   console.log("ok",this.Weather3[s]);
        // }
      
      });
      // console.log("INDEX NUMBER: ",s," ",event);

    }



    

    // if(this.i===0){
    //   this.weatherservice.getWeather(event).subscribe(data=>{this.Weather1=data});

    // }
    // if(this.i===1){
    //   this.weatherservice.getWeather(event).subscribe(data=>{this.Weather2=data});
      
    //   this.i-=2;
    // }
    // this.i+=1;

    

  }

  ngOnInit(): void {

    

    this.cites[0]="karachi";
    
    
    for(let s = this.cites.length-1 ; s < this.cites.length ; s++){
      // console.log(this.cites[s],"asdasd");

      this.weatherservice.getWeather(this.cites[0]).subscribe(data=>{
        this.Weather4=data
        this.Weather3[s] = this.Weather4;
        // console.log(this.Weather3[s]);

        // for(let s = 0 ; s < this.cites.length ; s++){
        //   console.log("ok",this.Weather3[s]);
        // }
      
      });
    }
    // this.weatherservice.getWeather(this.city1).subscribe(data=>{this.Weather1=data});
    // this.weatherservice.getWeather(this.city2).subscribe(data=>{this.Weather2=data});
  }

  getWeatherIcon(condition: string): string {
    // console.log(condition);
    switch (condition.toLowerCase()) {
      
      case 'sunny':
        return '../../../assets/Images/sunny.svg';

      case 'cloudy':
        return '../../../assets/Images/Windy-Cloud.svg';

      case 'partly cloudy':
        return '../../../assets/Images/cloudysunny.svg';

      case 'rain':
        return '../../../assets/Images/thunderstrom.svg';

      case 'rainy':
        return '../../../assets/Images/thunderstrom.svg';
        
      case 'snow':
        return '../../../assets/Images/heavysnow.svg';

      case 'snowy':
        return '../../../assets/Images/heavysnow.svg';

      default:
        return '../../../assets/Images/sunny.svg';
    }
  }
  Remove(index:number){

    if (index > -1 && index < this.Weather3.length) {

      this.Weather3.splice(index, 1); 

      this.cites.splice(index, 1); 

      console.log(`Removed weather item at index ${index}`);
    }
  } 

  toggleTemperatureUnit(): void {
    this.isCelsius = !this.isCelsius;
  }
}
