import { defineType, defineField } from "sanity";

const settings = defineType({
  type: "document",
  title: "Site Settings",
  name: "settings",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "color",
      name: "primary_color",
      title: "Primary Color",
    }),
    defineField({
      type: "color",
      name: "secondary_color",
      title: "Secondary Color",
    }),
    defineField({
      type: "color",
      name: "tertiary_color",
      title: "Tertiary Color",
    }),
    defineField({
      type: "color",
      name: "additional_color",
      title: "Additional Color",
    }),
  ],
});

export default settings;
