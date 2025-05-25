import fs from 'fs'
import crypto from 'crypto'

const registrar = (nombre, edad, animal, color, enfermedad) => {
  try {
    const data = fs.readFileSync('citas.json', 'utf8')
    const citas = JSON.parse(data)

    const id = crypto.randomUUID()

    if (!nombre || !edad || !animal || !color || !enfermedad) {
      console.log('Por favor ingrese todos los datos')
      return
    }
    citas.push({ id, nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Se agrego =>', citas)
  } catch (error) {
    console.error('Error al registrar la cita', error)
  }
}

const leer = () => {
  const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
  console.log(data)
}

export { registrar, leer }
