import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-plus-routing-child-routes',
  templateUrl: './plus-routing-child-routes.component.html',
  styles: [],
})
export class PlusRoutingChildRoutesComponent implements OnInit {
  rutaHijo1 = 'first-child';
  primeraMediaRuta = 'ruta';
  segundaMediaRuta = 'distinta';
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  irAOtraRuta() {
    this.router.navigateByUrl('/basic/data-binding');
  }

  modificarRutas() {
    this.activeRoute.url.subscribe((resp) => console.log(resp));
    console.log(this.activeRoute.snapshot.url);
    console.log(this.activeRoute.snapshot.queryParams);
  }
}
