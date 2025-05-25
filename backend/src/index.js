const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const productosRoutes = require('./routes/productos');
const webpayRoutes = require('./routes/webpay');
const contactoRoutes = require('./routes/contacto');
const divisasRoutes = require('./routes/divisas');


app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use('/api/webpay', webpayRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/divisas', divisasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
