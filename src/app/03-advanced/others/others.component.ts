import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styles: [],
})
export class OthersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
