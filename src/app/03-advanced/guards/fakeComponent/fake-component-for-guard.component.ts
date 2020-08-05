import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fake-component-for-guard',
  templateUrl: './fake-component-for-guard.component.html',
  styles: [],
})
export class FakeComponentForGuardComponent implements OnInit {
  parametrosRuta = {};
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.parametrosRuta = this.activatedRoute.snapshot.params;
    console.log(this.activatedRoute.snapshot.params);
  }
}
