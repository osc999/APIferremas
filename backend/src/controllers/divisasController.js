// Simulación de tasa CLP a USD
function obtenerTasa(req, res) {
  const tasaSimulada = 950; // 1 USD = 950 CLP (ejemplo)

  res.status(200).json({
    monedaBase: "CLP",
    monedaDestino: "USD",
    tasa: tasaSimulada,
    fecha: new Date().toISOString()
  });
}

module.exports = { obtenerTasa };
