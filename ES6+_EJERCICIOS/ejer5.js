//FILTER
//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const mayoresEdad = ages1.filter((age) => age > 18)
console.log(mayoresEdad)

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
const numerosPares = ages2.filter((age) => age % 2 === 0)
console.log(numerosPares)

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

const juegos = streamers1.filter(
  (juego) => juego.gameMorePlayed === 'League of Legends'
)
console.log(juegos)

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//usar la funcion .includes() para la comprobación.
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
const letras = streamers2.filter((letra) => letra.name.includes('u'))
console.log(letras)

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

const ejercicios = streamers2
  .filter((ejercicio) => ejercicio.gameMorePlayed.includes('Legends'))
  .map((ejercicio) => {
    if (ejercicio.age > 35) {
      return {
        ...ejercicio,
        gameMorePlayed: ejercicio.gameMorePlayed.toUpperCase()
      }
    }
    return ejercicio
  })

console.log(ejercicios)
