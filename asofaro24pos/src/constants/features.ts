import { Smartphone, BarChart2, Users, CreditCard, Cloud, Lock } from 'lucide-react';

export const features = [
  {
    icon: Smartphone,
    title: "Interfaz Amigable",
    description: "Diseño intuitivo que requiere mínimo entrenamiento para su personal"
  },
  {
    icon: BarChart2,
    title: "Análisis en Tiempo Real",
    description: "Seguimiento instantáneo de ventas, inventario y métricas de rendimiento"
  },
  {
    icon: Users,
    title: "Gestión de Clientes",
    description: "Construya lealtad con características integradas de CRM"
  },
  {
    icon: CreditCard,
    title: "Múltiples Formas de Pago",
    description: "Acepte todos los tipos de pago incluyendo contactless y móvil"
  },
  {
    icon: Cloud,
    title: "Sistema en la Nube",
    description: "Acceda a sus datos desde cualquier lugar y momento con respaldo en la nube"
  },
  {
    icon: Lock,
    title: "Transacciones Seguras",
    description: "Seguridad de nivel empresarial para todas sus transacciones"
  }
] as const;