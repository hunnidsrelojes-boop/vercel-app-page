import { defineField, defineType } from "sanity";

export default defineType({
  name: "brand",
  title: "Marca",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
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
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Orden de aparición",
      type: "number",
      description: "Menor número aparece primero.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
