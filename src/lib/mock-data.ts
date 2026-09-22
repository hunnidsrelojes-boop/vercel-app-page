import type { Brand, PaymentMethod, Watch } from "@/types/catalog";

// Datos de ejemplo — se reemplazan por Sanity CMS en la fase siguiente.
// Estructura pensada para calzar 1 a 1 con el esquema de Sanity.

export const BRANDS: Brand[] = [
  { slug: "citizen", name: "Citizen" },
  { slug: "seiko", name: "Seiko" },
  { slug: "bulova", name: "Bulova" },
  { slug: "casio", name: "Casio" },
  { slug: "orient", name: "Orient" },
];

export const WATCHES: Watch[] = [
  {
    slug: "citizen-eco-drive-promaster",
    name: "Citizen Eco-Drive Promaster",
    brand: "Citizen",
    reference: "BN0150-28E",
    caseSize: "44mm",
    movement: "Eco-Drive (a luz)",
    description: "Diver profesional con carga solar, resistencia al agua 200m.",
    availability: "stock",
    featured: true,
    images: [],
  },
  {
    slug: "seiko-5-sports",
    name: "Seiko 5 Sports Automático",
    brand: "Seiko",
    reference: "SRPD55K1",
    caseSize: "42.5mm",
    movement: "Automático",
    description: "Ícono accesible del catálogo Seiko, esfera azul degradée.",
    availability: "stock",
    images: [],
  },
  {
    slug: "casio-g-shock-ga2100",
    name: "Casio G-Shock GA-2100",
    brand: "Casio",
    reference: "GA-2100-1A1",
    caseSize: "45mm",
    movement: "Cuarzo",
    description: "El 'Casioak', resistente a golpes y agua, diseño octagonal.",
    availability: "stock",
    images: [],
  },
  {
    slug: "orient-bambino",
    name: "Orient Bambino Version 4",
    brand: "Orient",
    reference: "RA-AC0M01S",
    caseSize: "40.5mm",
    movement: "Automático",
    description: "Vestir clásico con cristal domo, herencia relojera japonesa.",
    availability: "encargo",
    images: [],
  },
  {
    slug: "bulova-lunar-pilot",
    name: "Bulova Lunar Pilot Chronograph",
    brand: "Bulova",
    reference: "96B251",
    caseSize: "45mm",
    movement: "Cuarzo cronógrafo",
    description: "Réplica del reloj usado en la misión Apollo 15.",
    availability: "encargo",
    images: [],
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    title: "Transferencia bancaria (ARS o USD)",
    description: "Transferencia en pesos argentinos o dólares a cuenta local.",
  },
  {
    title: "Efectivo",
    description: "En pesos o dólares, coordinando el encuentro.",
  },
  {
    title: "Cuenta bancaria en EE. UU.",
    description: "Transferencia internacional a cuenta estadounidense, o vía Zelle.",
  },
  {
    title: "Criptomonedas",
    description: "Aceptamos BTC, USDT y otras. Consultanos por WhatsApp.",
  },
];
