const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productosPath = path.join(__dirname, '../data/productos.json');

// Función para obtener productos leyendo el archivo en cada petición
function obtenerProductos(req, res) {
  try {
    const data = fs.readFileSync(productosPath, 'utf-8');
    const productos = JSON.parse(data);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error leyendo productos' });
  }
}

// Ruta GET para obtener productos
router.get('/', obtenerProductos);

// Ruta POST para crear un producto (si la tienes definida en el controlador original)
const { crearProducto } = require('../controllers/productosController');
router.post('/', crearProducto);

// PATCH para hacer pedido y disminuir stock
router.patch('/:codigo/pedido', (req, res) => {
  const codigo = req.params.codigo;
  const cantidad = Number(req.body.cantidad);

  if (!cantidad || cantidad <= 0) {
    return res.status(400).json({ error: 'Cantidad inválida' });
  }

  try {
    const data = fs.readFileSync(productosPath, 'utf-8');
    const productos = JSON.parse(data);

    const producto = productos.find(p => p.codigoProducto === codigo);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    if (producto.stock < cantidad) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    producto.stock -= cantidad;

    fs.writeFileSync(productosPath, JSON.stringify(productos, null, 2));

    res.json({ mensaje: 'Pedido realizado', nuevoStock: producto.stock });

  } catch (error) {
    res.status(500).json({ error: 'Error procesando pedido' });
  }
});

module.exports = router;
