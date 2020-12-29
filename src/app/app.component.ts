import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loader = true;
    days:any;
  hours:any;
  minutes:any;
  seconds:any;
  
  ngOnInit(){

    setTimeout(() =>{
      this.loader = false;
    }, 2000)
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let marriage = "jan 06, 2021 00:00:00",
  countDown = new Date(marriage).getTime(),
  x = setInterval(() =>{    
      let now = new Date().getTime(),
      distance = countDown - now;
      this.days = Math.floor(distance / (day)),
      this.hours = Math.floor((distance % (day)) / (hour)),
      this.minutes = Math.floor((distance % (hour)) / (minute)),
      this.seconds = Math.floor((distance % (minute)) / second);
  }, 0)
  }
}
