// Colecciones
const letras = ['a', 'c', 'd', 'e', 'a', 'a', 'e', 'b'];
const numeros = [1, 2, 3, 4, 58, 7, 1];
const numerosIguales = [2, 2, 2, 2];
const objNumero = [{ costo: 4 }, { costo: 7 }, { costo: 10 }];
const objNumeroIguales = [{ costo: 7 }, { costo: 7 }, { costo: 7 }];
const objCalificaciones = [
  { calificacion: 20 },
  { calificacion: 19 },
  { calificacion: 20 },
  { calificacion: 10 }
];
const objAlumnos = [
  {
    nombre: 'Luis Reinoso',
    id: '123',
    premios: [['estrella', 'carton'], 'luna']
  },
  {
    nombre: 'Carlos Perez',
    id: '321',
    premios: ['luna', ['piedra', 'papel']]
  },
  {
    nombre: 'Luis Maldonado',
    id: '111',
    premios: ['sol']
  }
];

import countBy from 'lodash/countBy';
/* Contar el numero de veces que se repite un elemento en una colección
 * Array = ['a', 'b', 'c', 'd', 'e']
 */

// contador letras
console.log(letras);
const contadorLetras = countBy(letras, letra => {
  return letra;
});
console.log(contadorLetras);

// contador Calificaicones
console.log(objCalificaciones);
const contadorCalificaciones = countBy(objCalificaciones, calificacion => {
  return calificacion['calificacion'];
});
console.log(contadorCalificaciones);

import every from 'lodash/every';

/* Verifica si todos los elementos de una colección es verdadero según el predicado
 */
console.log(numerosIguales);
const hasTodosDos = every(numerosIguales, valor => {
  return valor === 2;
});
console.log(hasTodosDos);

console.log(objNumeroIguales);
let hasTodosCosto7 = every(objNumeroIguales, valor => {
  return valor.costo === 7;
});
console.log(hasTodosCosto7);

console.log(objNumeroIguales);
hasTodosCosto7 = every(objNumeroIguales, ['costo', 7]);
console.log(hasTodosCosto7);

import filter from 'lodash/filter';

/* Itera sobre una colección retorna todos los elementos que den verdadero en el predicado
 * el predicado tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(numeros);
const valoresMayor5 = filter(numeros, valor => valor > 5);
console.log(valoresMayor5);

import find from 'lodash/find';

/* Itera sobre una colección, retorna el primer valor que de verdadero en el predicado
 * el predicado tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objAlumnos);
const alumnoLuis = find(objAlumnos, valor => valor['id'] === '123');
console.log(alumnoLuis);

import findLast from 'lodash/findLast';

/* Itera sobre una colección de derecha a izquierda, retorna el primer valor que de verdadero en el predicado
 * el predicado tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objAlumnos);
const alumnoUltimoLuis = findLast(objAlumnos, valor =>
  valor['nombre'].includes('Luis')
);
console.log(alumnoUltimoLuis);

import flatMap from 'lodash/flatMap';

/* Crear un arreglo flat de los valores de una colección según el valor devuelto por el iterador
 * el iterador tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objAlumnos);
const nombresAlumnos = flatMap(objAlumnos, alumno => alumno);
console.log(nombresAlumnos);

console.log(objAlumnos);
const premiosNoFlatAlumnos = flatMap(objAlumnos, alumno => alumno.premios);
console.log(premiosNoFlatAlumnos);

import flatMapDeep from 'lodash/flatMapDeep';

/* Crear un arreglo flat a profundidad de los objectos en la coleccion de los valores de una coleccion según el valor devuelto por el iterador
 * el iterador tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objAlumnos);
const premiosAlumnos = flatMapDeep(objAlumnos, alumno => alumno.premios);
console.log(premiosAlumnos);

import flatMapDepth from 'lodash/flatMapDepth';

/* Crear un arreglo flat a una cierta profundidad de los objectos en la coleccion de los valores de una coleccion según el valor devuelto por el iterador
 * el iterador tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objAlumnos);
const premiosAlumnosUno = flatMapDepth(objAlumnos, alumno => alumno.premios, 1);
console.log(premiosAlumnosUno);

import forEach from 'lodash/forEach';

/* Itera sobre una colección
 * el iterador tiene tres argumentos (value, index|key, collection)
 */
console.log(numeros);
forEach(numeros, valor => {
  console.log(valor);
});

console.log(objNumero);
forEach(objNumero, valor => {
  console.log(valor);
  console.log(valor['costo']);
});

import forEachRight from 'lodash/forEachRight';

/* Itera sobre una colección
 * la diferencia es que itera de derecha a izquierda
 */
console.log(numeros);
forEachRight(numeros, valor => {
  console.log(valor);
});

console.log(objNumero);
forEachRight(objNumero, valor => {
  console.log(valor);
  console.log(valor['costo']);
});

import groupBy from 'lodash/groupBy';

/* Agrupa los valores de una colección, según la función del iterador
 */

console.log(numeros);
const grupoNumero = groupBy(numeros, valor => {
  return valor;
});
console.log(grupoNumero);

console.log(objNumero);
const grupoObjNumero = groupBy(objNumero, valor => {
  return valor['costo'];
});
console.log(grupoObjNumero);

import includes from 'lodash/includes';

/* Verifica si un valor esta en una colección
 * se puede configurar para que empiece la verificación desde un indice en particular
 */

console.log(numeros);
const isUnoPresente = includes(numeros, 1);
console.log(isUnoPresente);

import invokeMap from 'lodash/invokeMap';

/* Ejecuta un metodo en cada elemento de una coleccion, retorna un arreglos con los arreglo generado por la ejecucion del metodo seleccionado
 */

console.log(nombresAlumnos);
const auxNombres = nombresAlumnos.map(alumno => alumno.nombre);
console.log(auxNombres);
const separarNombresAlumnos = invokeMap(auxNombres, 'split', ' ');
console.log(separarNombresAlumnos);

import keyBy from 'lodash/keyBy';

/* Retorna un objeto compuesto por la llave que es generada por el iterador y su valor será el contenido que genero la llave
 */

console.log(nombresAlumnos);
const alumnosKeyId = keyBy(nombresAlumnos, alumno => alumno.id);
console.log(alumnosKeyId);

import map from 'lodash/map';

/* Crea un arreglo con los valores que retorna el iterador
 * el iterador tiene tres argumentos (valor, index|key, coleccion)
 */

console.log(objCalificaciones);
const numerosNotas = map(
  objCalificaciones,
  calificacion => calificacion.calificacion
);
console.log(numerosNotas);

import orderBy from 'lodash/orderBy';

/* Crear un arreglo con los elementos ordenados segun el orden que se pase como parámetro
 * si no se pone parámetro sera ordenado de forma ascendente
 */

console.log(objNumero);
const ordenadoObjNumero = orderBy(objNumero, 'costo', 'desc');
console.log(ordenadoObjNumero);

import partition from 'lodash/partition';

/* Retorna un arreglo con dos arreglos dentro segun retoner el valor de la iteracion, en el uno los que viene verdadero
 * y el otro los que dieron falso
 */

console.log(objNumero);
const numerosMayorMenor5 = partition(objNumero, numero => numero.costo > 5);
console.log(numerosMayorMenor5);

import reduce from 'lodash/reduce';

/* Reduce una coleccion a un valor guardado en un acomulador que se mantiene a traves del
 * iterador
 * tiene tres argumentos (coleccion, (acumulador, valorActual, index), valorInicialAcumlador)
 */

console.log(objCalificaciones);
const sumaCalificaciones = reduce(
  objCalificaciones,
  (acumulador, calificacion) => acumulador + calificacion.calificacion,
  0
);
console.log(sumaCalificaciones);

import reduceRight from 'lodash/reduceRight';

/* Reduce una coleccion de derecha izquierda a un valor guardado en un acomulador que se mantiene a traves del
 * iterador
 * tiene tres argumentos (coleccion, (acumulador, valorActual, index), valorInicialAcumlador)
 */

console.log(objCalificaciones);
const sumaCalificacionesDerecha = reduceRight(
  objCalificaciones,
  (acumulador, calificacion) => acumulador + calificacion.calificacion,
  0
);
console.log(sumaCalificacionesDerecha);

import reject from 'lodash/reject';

/* Retorna un arreglo con aquellos valores en que el predicado retorne valor diferente de verdadero
 */

console.log(numeros);
const numerosDiferentesUno = reject(numeros, numero => numero === 1);
console.log(numerosDiferentesUno);

import sample from 'lodash/sample';

/* Retorna un elemento aleatorio de una coleccion
 */

console.log(numeros);
const numeroAleatorio = sample(numeros);
console.log(numeroAleatorio);

import sampleSize from 'lodash/sampleSize';

/* Retorna n elementos aleatorios de una coleccion
 */

console.log(numeros);
const numerosAleatorios = sampleSize(numeros, 2);
console.log(numerosAleatorios);

import suffle from 'lodash/shuffle';

/* Cambia el orden en que se encuentra una coleccion
 */

console.log(numeros);
const numerosMezcaldos = suffle(numeros);
console.log(numerosMezcaldos);

import size from 'lodash/size';

/* Retorna el tamaño de una coleccion
 */

console.log(objCalificaciones);
const tamanioCalificaciones = size(objCalificaciones);
console.log(tamanioCalificaciones);

import some from 'lodash/some';

/* retorna verdadero si iterador retorna verdadero al menos una vez.
 * Si el iterador retorna verdadero, se detendra el iterador.
 */

console.log(objCalificaciones);
const isAlguienTiene19 = some(
  objCalificaciones,
  calificacion => calificacion.calificacion === 19
);
console.log(isAlguienTiene19);

import sortBy from 'lodash/sortBy';

/* Crea un arreglo con los elementos de una colección ordenados en orden ascendente según el valor de iterador
 */

let auxObjNumero = objNumero.reverse();
console.log(auxObjNumero);
const objNumeroAscendente = sortBy(auxObjNumero, 'costo');
console.log(objNumeroAscendente);
