# Observables

- Los observables tienen tres métodos fundamentales, next() para mandar valores a la linea de tiempo, error() para mandar errores a la linea de tiempo y complete() para indicar que se ha acabado el envio de datos.

* Los datos de un observable SOLO se reciben si se ha producido una subscripcion. Hay que imaginar esto como una cinta transportadora de comida. Hasta que no haya una persona sentada que consuma la comida, no se produce interacción alguna con la cinta ni la comida.

* Los observables son cold cuando los datos los genera el propio observable y es hot cuando los datos se generan fuera del observable.

* Los observables son unicast, es decir, por cada observador proporciona un hilo de información individual (aunque tenga el mismo contenido). Los subjects son multicast, es decir, por cada observador proporcionan exactamente el mismo hilo de información.(Ver ejercicio de 02-subjects y como se comportan los dos tipos de subscripcion que hay)

* Observable.subscribe(observer)

* El observer es el que contiene las funciones next, error y complete. Es decir => observer{next(), error(), complete()}

* Subject es un tipo de observable con los siguientes matices: es multicasting (distribuye la misma info a todas las subscripciones) y es a la vez un Observer. Es decir, tiene la posibilidad de comportarse como un receptor de información (subject.subscribe()) y como un emisor de información (subject.next()). (Ver ejercicio de 02-subjects)

# Operadores

- Un operador realiza una operación determinada con la informacion que ha sido recibida. El conjunto de operadores por el que pasa la información se llama pipeline.
