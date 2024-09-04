const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [{
                name: 'alt',
                title: 'alt',
                type: 'string'
            }]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: 'Content',
            type: "array",
            of: [{type: "block"}] // This allows for Wizzywigs or SmartText/ Rich Text 
        }, 
        {
            name: 'listDetails',
            title: 'List Details',
            type: 'array',
            of: [
                {
                    name: "List",
                    type: 'object',
                    fields: [
                        {
                            name: "name",
                            title: 'List Name',
                            type: 'string',
                        },
                        {
                            name: 'listContent',
                            title: 'List Content',
                            type: "array",
                            of: [{
                                type: "string"
                            }]
                        }
                    ]
                    
                }
            ]
        }
    ]
}

export default project;