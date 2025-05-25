const fs = require('fs');
const path = require('path');

const mensajesPath = path.join(__dirname, '../data/mensajes.json');

function enviarMensaje(req, res) {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const nuevoMensaje = {
    nombre,
    correo,
    mensaje,
    fecha: new Date().toISOString()
  };

  const mensajes = JSON.parse(fs.readFileSync(mensajesPath));
  mensajes.push(nuevoMensaje);
  fs.writeFileSync(mensajesPath, JSON.stringify(mensajes, null, 2));

  res.status(200).json({ mensaje: 'Mensaje enviado correctamente' });
}

module.exports = { enviarMensaje };
