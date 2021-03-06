import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  year = new Date();
  constructor() { }

  ngOnInit() {
  }

  fetchCurrentYear(): number {
    return this.year.getFullYear();
  }
}
