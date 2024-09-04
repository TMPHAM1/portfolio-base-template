// schemas/dynamicForm.js

export default {
    name: 'dynamicForm',
    title: 'Custom Form',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Form Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Form Description',
        type: 'text',
      },
      {
        name: 'url', 
        title: 'Form Post URL',
        type: 'string',
      },
      {
        name: 'headers',
        title:'Optional Headers',
        type: 'array',
        of: [
            {
                type: "object",
                fields: [
                    {
                      name: 'key',
                      title: 'Key',
                      type: 'string',
                      validation: (Rule:any) => Rule.required().warning('Key is required'),
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                      validation: (Rule:any) => Rule.required().warning('Value is required'),
                    },
                  ],
            }
        ]
      },
      {
        name: 'fields',
        title: 'Form Fields',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'textField',
            title: 'Text Field',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
              },
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'placeholder',
                title: 'Placeholder',
                type: 'string',
              },
              {
                name: 'type',
                title: 'Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Email', value: 'email' },
                    { title: 'Number', value: 'number' },
                  ],
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'textareaField',
            title: 'Textarea Field',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
              },
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'placeholder',
                title: 'Placeholder',
                type: 'string',
              },
              {
                name: 'rows',
                title: 'Rows',
                type: 'number',
              },
            ],
          },
          {
            type: 'object',
            name: 'checkboxField',
            title: 'Checkbox Field',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
              },
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  