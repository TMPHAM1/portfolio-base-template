export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "sectionType",
      type: "string",
      title: "Section Type",
      options: {
        list: [
          { title: "Header + Content", value: "text" },
          { title: "Full-Width Image", value: "fullImage" },
          { title: "Multiple Images", value: "multiImage" },
        ],
        layout: "radio",
      },
    },
    {
      name: "header",
      type: "string",
      title: "Header",
      hidden: ({ parent }) => parent?.sectionType !== "text",
    },
    {
      name: "content",
      type: "array",
      title: "Rich Text Content",
      of: [{ type: "block" }],
      hidden: ({ parent }) => parent?.sectionType !== "text",
    },
    {
      name: "fullImage",
      type: "image",
      title: "Full-Width Image",
      hidden: ({ parent }) => parent?.sectionType !== "fullImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Multiple Images",
      of: [{ type: "image" }],
      hidden: ({ parent }) => parent?.sectionType !== "multiImage",
      options: {
        layout: "grid",
      },
    },
  ],
};
