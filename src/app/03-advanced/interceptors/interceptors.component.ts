import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styles: [],
})
export class InterceptorsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  peticionGetSimple() {
    this.http.get(this.url).subscribe((resp) => console.log(resp));
  }
}
