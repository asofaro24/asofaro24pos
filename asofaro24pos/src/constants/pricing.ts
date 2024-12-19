export const plans = [
  {
    name: "Básico",
    price: "199.000",
    features: [
      "1 Terminal POS",
      "Reportes Básicos",
      "Procesamiento de Pagos",
      "Respaldo en la Nube",
      "Soporte por Email"
    ]
  },
  {
    name: "Profesional",
    price: "399.000",
    features: [
      "3 Terminales POS",
      "Análisis Avanzado",
      "Gestión de Inventario",
      "Programa de Fidelización",
      "Soporte 24/7"
    ]
  },
  {
    name: "Empresarial",
    price: "799.000",
    features: [
      "Terminales Ilimitados",
      "Reportes Personalizados",
      "Acceso API",
      "Soporte Multi-local",
      "Gerente de Cuenta Dedicado"
    ]
  }
] as const;