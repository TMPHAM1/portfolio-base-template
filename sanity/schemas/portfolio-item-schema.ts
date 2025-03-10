export default {
  name: "portfolio-item",
  title: "Portfolio Items",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "reference", to: [{ type: "section" }] }],
    },
  ],
};
