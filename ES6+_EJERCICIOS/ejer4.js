//MAP
//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando .map().
const users1 = [
  { id: 1, name1: 'Abel' },
  { id: 2, name1: 'Julia' },
  { id: 3, name1: 'Pedro' },
  { id: 4, name1: 'Amanda' }
]
const nombres = users1.map((users1) => users1.name1)
console.log(nombres)

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
//empiece por 'A'.
const users2 = [
  { id: 1, name2: 'Abel' },
  { id: 2, name2: 'Julia' },
  { id: 3, name2: 'Pedro' },
  { id: 4, name2: 'Amanda' }
]

const listaNombres = users2.map((users2) => {
  let { name2 } = users2
  if (name2.startsWith('A')) {
    name2 = 'Anacleto'
  }
  return name2
})
console.log(listaNombres)

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const listaCiudades = cities.map((cities) => {
  let { name, isVisited } = cities
  if (isVisited == true) {
    name += '- Visitado'
  }
  return name
})

console.log(listaCiudades)
