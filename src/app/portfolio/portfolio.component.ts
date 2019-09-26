import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  event = {
    id:  1,
    name: 'Obeke Calistus',
    speciality: 'Coding'
  };

  constructor() { }

  ngOnInit() {
  }

  handleClockMe(): void {
    console.log('Hey you!');
  }

}
