import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-data-http-requests',
  templateUrl: './data-http-requests.component.html',
  styleUrls: ['./data-http-requests.component.css'],
})
export class DataHttpRequestsComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {}

  peticionGetSimple() {
    this.httpService.peticionGetSimple().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  peticionGetCompleta() {
    this.httpService.peticionGetCompleta().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  peticionPost() {
    this.httpService.peticionPost().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  peticionDelete() {
    this.httpService.peticionDelete().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  peticionPut() {
    this.httpService.peticionPut().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
