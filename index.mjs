import { registrar, leer } from './operaciones.mjs'

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

const [nombre, edad, animal, color, enfermedad] = argumentos.slice(1)

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad)
}

if (operacion === 'leer') {
  leer()
}
