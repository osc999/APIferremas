function simularPago(req, res) {
  const { monto, descripcion, tarjeta } = req.body;

  if (!monto || !descripcion || !tarjeta) {
    return res.status(400).json({ error: 'Faltan datos para procesar el pago' });
  }

  // Aquí iría la integración real con WebPay
  const resultado = {
    estado: 'APROBADO',
    mensaje: 'Pago simulado exitoso',
    monto,
    descripcion,
    fecha: new Date().toISOString()
  };

  res.status(200).json(resultado);
}

module.exports = { simularPago };
