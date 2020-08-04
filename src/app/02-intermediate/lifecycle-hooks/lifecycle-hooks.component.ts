import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css'],
})
export class LifecycleHooksComponent
  implements
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  estadosRecorridos: string[] = [];
  @Input() contador = 0;
  constructor() {
    this.estadosRecorridos.push('constructor');
  }

  ngOnInit() {
    // Se ejecuta cuando ya ha sido llamado y se ha mostrado en la pantalla
    // Funcionalidades como los @Input se computan a partir del ngOnInit, en el constructor aún no se ha recibido dato alguno
    this.estadosRecorridos.push('ngOnInit');
  }

  ngOnDestroy() {
    // Se llama cuando Angular va a eliminar el componente, por ejemplo, cuando se cambia de ruta
    this.estadosRecorridos.push('ngOnDestroy');
    this.printLifecycles();
  }

  ngAfterContentInit() {
    this.estadosRecorridos.push('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.estadosRecorridos.push('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.estadosRecorridos.push('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.estadosRecorridos.push('ngAfterViewChecked');
  }

  printLifecycles() {
    console.log(this.estadosRecorridos);
  }

  aumentarContador() {
    this.contador = this.contador + 1;
    this.estadosRecorridos.push('ngOnChanges');
  }
}
