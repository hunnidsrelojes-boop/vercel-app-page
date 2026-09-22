import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({
      name: "paymentMethods",
      title: "Métodos de pago",
      type: "array",
      of: [
        {
          type: "object",
          name: "paymentMethod",
          fields: [
            defineField({ name: "title", title: "Título", type: "string" }),
            defineField({
              name: "description",
              title: "Descripción",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configuración del sitio" };
    },
  },
});
