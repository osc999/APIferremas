const productos = require('../data/productos.json');
const fs = require('fs');

// Obtener todos los productos
function obtenerProductos(req, res) {
  res.json(productos);
}

// Crear un nuevo producto
function crearProducto(req, res) {
  const { codigoProducto, marca, modelo, nombre, categoria, precio, stock } = req.body;

  // Validar campos (ahora modelo es obligatorio, no codigoInterno)
  if (!codigoProducto || !marca || !modelo || !nombre || !categoria || !precio || !stock) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  const nuevoProducto = {
    codigoProducto,
    marca,
    modelo,
    nombre,
    categoria,
    precio,
    stock
  };

  productos.push(nuevoProducto);

  // Guardar los productos en el archivo (simulando base de datos)
  fs.writeFileSync('./backend/src/data/productos.json', JSON.stringify(productos, null, 2));

  res.status(201).json(nuevoProducto);
}

module.exports = { obtenerProductos, crearProducto };
