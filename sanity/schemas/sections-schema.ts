export type SectionTypeParent = {
  parent: { sectionType: string };
};
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
          { title: "Multiple Lists", value: "multiList" },
        ],
        layout: "radio",
      },
    },
    {
      name: "header",
      type: "string",
      title: "Header",
      hidden: ({ parent }: SectionTypeParent) => parent?.sectionType !== "text",
    },
    {
      name: "content",
      type: "array",
      title: "Rich Text Content",
      of: [{ type: "block" }],
      hidden: ({ parent }: SectionTypeParent) => parent?.sectionType !== "text",
    },
    {
      name: "fullImage",
      type: "image",
      title: "Full-Width Image",
      hidden: ({ parent }: SectionTypeParent) =>
        parent?.sectionType !== "fullImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      type: "array",
      title: "Multiple Images",
      of: [{ type: "image" }],
      hidden: ({ parent }: SectionTypeParent) =>
        parent?.sectionType !== "multiImage",
      options: {
        layout: "grid",
      },
    },
    {
      name: "listDetails",
      title: "List Details",
      type: "array",
      of: [
        {
          name: "List",
          type: "object",
          fields: [
            {
              name: "name",
              title: "List Name",
              type: "string",
            },
            {
              name: "listContent",
              title: "List Content",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
      hidden: ({ parent }: SectionTypeParent) =>
        parent?.sectionType !== "multiList",
    },
  ],
};
