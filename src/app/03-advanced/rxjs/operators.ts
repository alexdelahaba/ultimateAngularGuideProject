export const operadores = [
  {
    nombre: 'count',
    descripcion:
      'Registra el numero de emisiones y las devuelve cuando se ejecuta el complete',
    video: '-',
  },
  {
    nombre: 'pluck',
    descripcion:
      'Recibe como argumento un atributo del objeto y criba para devolver solo ese argumento, si el atributo está anidado, el argumento de la función sería así pluck("coche", "marca") para el objeto {coche:{marca: "renault"}',
    video: 195,
  },
  {
    nombre: 'share',
    descripcion:
      'Convierte un observable en multicast, es decir, que puede ser subscrito desde distintos subscribe()',
    video: 201,
  },
  {
    nombre: 'map',
    descripcion:
      'Map es un operador bastante flexible y genérico, es muy similar al map de javascript',
    video: '34FH',
  },
  {
    nombre: 'mapTo',
    descripcion:
      'Devuelve el parámetro indicado por cada instancia de informacion recibida por el subscribe',
    video: '36FH',
  },
  {
    nombre: 'filter',
    descripcion: 'Permite hacer un cribado de datos atendiendo a una condicion',
    video: '37FH',
  },
  {
    nombre: 'cadenaOperadores',
    descripcion: 'Ejemplo del uso multiple de operadores',
    video: '38FH',
  },
  {
    nombre: 'tap',
    descripcion:
      'Su principal función es poder disparar efectos secundarios. Es decir, puede ejecutar funciones con los datos sin alterar el datos ya que devuelve exactamente lo mismo que recibió. Se utiliza para debuguear basicamente, dentro del tap se permiten hacer operaciones pero siempre va a devolver lo mismo que recibió, para no cortar el flujo ni la concordancia',
    video: '39FH - 198',
  },
  {
    nombre: 'reduce',
    descripcion:
      'Idéntico al reduce de JavaScript. Genera una funcion acumuladora para el tratamiento de los datos',
    video: '42FH',
  },
  {
    nombre: 'scan',
    descripcion:
      'Es muy parecido a reduce pero no devuelve un valor final sino que va devolviendo valores según el intervalo de tiempo',
    video: '43FH',
  },
  {
    nombre: 'take',
    descripcion:
      'Limita el número máximo de emisiones de un observable al número indicado por parámetro',
    video: '47FH',
  },
  {
    nombre: 'first',
    descripcion:
      'Se queda o bien con el primer valor (cuando va sin argumentos) o con el primer valor cuando se cumple una condicion indicada por parámetros',
    video: '48FH',
  },
  {
    nombre: 'takeWhile',
    descripcion: 'Recibe valores mientras se cumpla la condicion indicada',
    video: '49FH',
  },
  {
    nombre: 'takeUntil',
    descripcion:
      'Un observable que se ejecuta hasta que se produzca una emision de datos de otro observable indicado por parámetros',
    video: '50FH',
  },
  {
    nombre: 'skip',
    descripcion:
      'Permite saltas las x primeras ejecuciones de un observable, siendo x el parámetro pasado a la funcion',
    video: '51FH',
  },
  {
    nombre: 'distinct',
    descripcion: 'Elimina los resultados duplicados de un observable',
    video: '52FH',
  },
  {
    nombre: 'distinctUntilChanged',
    descripcion:
      'Elimina los elementos duplicados si y solo si se emiten seguidamente, es decir: [1,2,2,1,3,2] = [ 1,2,-,1,3,2]. Importante, "1" no es lo mismo que 1',
    video: '53FH',
  },
  {
    nombre: 'distinctUntilKeyChanged',
    descripcion:
      'No observa los objetos consecutivos que compartan el mismo valor para el atributos especificado por parámetro. Ver video',
    video: '54FH',
  },
  {
    nombre: 'debounceTime',
    descripcion:
      'Emite un valor del observable pasado x tiempo si y solo si, antes de que se cumpla ese tiempo no ha sido emitido otro dato',
    video: '58FH',
  },
  {
    nombre: 'throttleTime',
    descripcion:
      'Muy parecido al debounceTime. Emite un evento y no escuchará ninguno hasta que pase el tiempo indicado por parámetro. Ver video',
    video: '59FH',
  },
  {
    nombre: 'sampleTime',
    descripcion:
      'Escucha el ultimo evento que se haya emitido en el intervalo indicado por parámetro. Ver video',
    video: '60FH',
  },
  {
    nombre: 'sample',
    descripcion:
      'Emite el ultimo evento atiendo a un segundo observable. Es decir, cuando se emite el observable mandado por parámetro, dispara la escuchar del observable del que nos estamos subscribiendo.',
    video: '61FH',
  },
  {
    nombre: 'auditTime',
    descripcion:
      'Emite el ultimo valor emitido durante el intervalo de tiempo especificado',
    video: '62FH',
  },
  {
    nombre: 'startWith',
    descripcion: 'Introduce un dato al inicio de los datos del observable',
    video: '88FH',
  },
  {
    nombre: 'endWith',
    descripcion: 'Introduce un dato al final de los datos del observable',
    video: '89FH',
  },
  {
    nombre: 'merge',
    descripcion: 'Combina dos observables en el mismo hilo',
    video: '92FH',
  },
  {
    nombre: 'combineLatest',
    descripcion: 'Crea un array que mezcla dos observables, mejor ver video',
    video: '93FH',
  },
  {
    nombre: 'forkJoin',
    descripcion:
      'Emite en un array los ultimos datos emitidos por los observables mandados como parámetros',
    video: '94FH',
  },
];
