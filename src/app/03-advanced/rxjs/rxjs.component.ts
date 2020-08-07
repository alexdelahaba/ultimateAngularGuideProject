import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { operadores } from './operators';
import {
  observableObjetos,
  creacionManualObservable,
} from './Observables/01-Observables/01-Observables';
import { ObservablesService } from './observables.service';
import { count } from 'rxjs/operators';
import { User } from './user.interface';
import { creacionMedianteOfObservable } from './Observables/02-GeneracionObservables/of';
import { creacionConFromEvent } from './Observables/02-GeneracionObservables/fromEvent';
import { creacionObservablesConRange } from './Observables/02-GeneracionObservables/range';
import { usarAsyncScheduler } from './Observables/02-GeneracionObservables/asyncScheduler';
import {
  creacionObservablesConInterval,
  creacionObservablesConTimer,
} from './Observables/02-GeneracionObservables/interval-timer';
import { operadorPluck } from './Observables/03-Operators/pluck';
import { operadorMapTo } from './Observables/03-Operators/mapTo';
import {
  operadorFilter,
  operadorFilter2,
} from './Observables/03-Operators/filter';
import {
  operadorMap,
  operadorMapEventoClick,
} from './Observables/03-Operators/map';
import { cadenaOperadores } from './Observables/03-Operators/cadenaOperadores';
import { operadorTap } from './Observables/03-Operators/tap';
import { operadorReduce } from './Observables/03-Operators/reduce';
import { operadorScan } from './Observables/03-Operators/scan';
import { operadorauditTime } from './Observables/05-operadoresTiempo/operadoresTiempo';
import { operadorforkJoin } from './Observables/08-OperadoresCombinacion/operadoresCombinacion';
import {
  operadormerge,
  operadorcombineLatest,
} from './Observables/08-OperadoresCombinacion/operadoresCombinacion';
import {
  operadorstartWith,
  operadorendWith,
} from './Observables/08-OperadoresCombinacion/operadoresCombinacion';
import {
  operacionesAjax,
  getJsonFuncion,
  otrosVerbos,
} from './Observables/06-Ajax/ajax';
import {
  operadorsampleTime,
  operadorsample,
} from './Observables/05-operadoresTiempo/operadoresTiempo';
import {
  operadorDebounceTime,
  operadorthrottleTime,
} from './Observables/05-operadoresTiempo/operadoresTiempo';
import {
  operadorDistinctUntilChanged,
  operadorDistinctUntilKeyChanged,
} from './Observables/04-masOperadores/masOperadores';
import {
  operadorSkip,
  operadorDistinct,
} from './Observables/04-masOperadores/masOperadores';
import {
  operadorTakeWhile,
  operadorTakeUntil,
} from './Observables/04-masOperadores/masOperadores';
import {
  operadorTake,
  operadorFirst,
} from './Observables/04-masOperadores/masOperadores';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  arrayOperadores = operadores.sort(this.ordenarAlfabeticamenteOperadores);
  // observableObjetos = observableObjetos;
  observableUsuarios = this.observablesService.getUsuarios();
  constructor(private observablesService: ObservablesService) {}

  ngOnInit(): void {}

  devolverObservableUsuarios() {
    return this.observablesService.getUsuarios();
  }

  // ------------------------------------
  creacionManualObservables() {
    creacionManualObservable();
  }
  // ------------------------------------

  // ------------------------------------
  creacionObservablesConOf() {
    creacionMedianteOfObservable();
  }
  // ------------------------------------

  // ------------------------------------
  creacionObservablesConFromEvent() {
    creacionConFromEvent();
  }
  // ------------------------------------

  // ------------------------------------
  creacionObservablesConRange() {
    creacionObservablesConRange();
  }
  // ------------------------------------

  // ------------------------------------
  creacionObservablesConInterval() {
    creacionObservablesConInterval();
  }
  // ------------------------------------

  // ------------------------------------
  creacionObservablesConTimer() {
    creacionObservablesConTimer();
  }
  // ------------------------------------
  // ------------------------------------
  usarAsyncScheduler() {
    usarAsyncScheduler();
  }
  // ------------------------------------

  redireccionadorFunciones(funcion: string) {
    switch (funcion) {
      case 'count':
        this.testCount();
        break;

      case 'map':
        operadorMap();
        operadorMapEventoClick();
        break;

      case 'pluck':
        operadorPluck();
        break;

      case 'mapTo':
        operadorMapTo();
        break;

      case 'filter':
        operadorFilter();
        operadorFilter2();
        break;

      case 'cadenaOperadores':
        cadenaOperadores();
        break;

      case 'tap':
        operadorTap();
        break;

      case 'reduce':
        operadorReduce();
        break;

      case 'scan':
        operadorScan();
        break;

      case 'take':
        operadorTake();
        break;

      case 'first':
        operadorFirst();
        break;

      case 'takeWhile':
        operadorTakeWhile();
        break;

      case 'takeUntil':
        operadorTakeUntil();
        break;

      case 'skip':
        operadorSkip();
        break;

      case 'distinct':
        operadorDistinct();
        break;

      case 'distinctUntilChanged':
        operadorDistinctUntilChanged();
        break;

      case 'distinctUntilKeyChanged':
        operadorDistinctUntilKeyChanged();
        break;
      case 'debounceTime':
        operadorDebounceTime();
        break;
      case 'throttleTime':
        operadorthrottleTime();
        break;
      case 'sampleTime':
        operadorsampleTime();
        break;
      case 'sample':
        operadorsample();
        break;
      case 'auditTime':
        operadorauditTime();
        break;
      case 'startWith':
        operadorstartWith();
        break;
      case 'endWith':
        operadorendWith();
        break;
      case 'merge':
        operadormerge();
        break;
      case 'combineLatest':
        operadorcombineLatest();
        break;
      case 'forkJoin':
        operadorforkJoin();
        break;

      default:
        console.log('Funcion no referenciada en este componente');
        break;
    }
  }

  testCount() {
    console.log('count');
    this.observableUsuarios
      .pipe(
        count((usuario: User) => {
          console.log(usuario);
          return usuario.id > 0;
        })
      )
      .subscribe((resp) => console.log(resp));
  }

  ordenarAlfabeticamenteOperadores(valor1, valor2) {
    if (valor1.nombre > valor2.nombre) {
      return 1;
    }
    if (valor1.nombre < valor2.nombre) {
      return -1;
    }
    return 0;
  }

  operacionesAjax() {
    operacionesAjax();
    getJsonFuncion();
  }

  otrosVerbosConAjax() {
    otrosVerbos();
  }
}
