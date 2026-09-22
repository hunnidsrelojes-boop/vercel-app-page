import { defineField, defineType } from "sanity";

export default defineType({
  name: "watch",
  title: "Reloj",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del modelo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "availability",
      title: "Disponibilidad",
      type: "string",
      options: {
        list: [
          { title: "En stock", value: "stock" },
          { title: "Por encargo", value: "encargo" },
        ],
        layout: "radio",
      },
      initialValue: "stock",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reference",
      title: "Número de referencia",
      type: "string",
    }),
    defineField({
      name: "caseSize",
      title: "Medida de la caja",
      type: "string",
      description: "Ej: 42mm",
    }),
    defineField({
      name: "movement",
      title: "Movimiento",
      type: "string",
      description: "Ej: Automático, Cuarzo, Eco-Drive",
    }),
    defineField({
      name: "crystal",
      title: "Tipo de cristal",
      type: "string",
      description: "Ej: Zafiro, Mineral, Hardlex, Flame Fusion",
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
    }),
    defineField({
      name: "originalPrice",
      title: "Precio anterior (para mostrar descuento)",
      description:
        "Completá esto solo si el reloj tiene descuento. Se muestra tachado junto al precio actual.",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).custom((value, context) => {
          const price = (context.document)?.price;
          if (value != null && typeof price === "number" && value <= price) {
            return "El precio anterior debe ser mayor al precio actual.";
          }
          return true;
        }),
    }),
    defineField({
      name: "showPrice",
      title: "Mostrar precio en la web",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "instagramPostUrl",
      title: "Link a publicación de Instagram",
      description: "Pegá el link al reel o post de Instagram donde mostrás este reloj.",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "images",
      title: "Fotos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              description: "Descripción breve de la foto para SEO y accesibilidad.",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "availability",
      media: "images.0",
    },
  },
});
