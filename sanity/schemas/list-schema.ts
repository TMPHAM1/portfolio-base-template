const list = {
    name: 'list',
    title: 'Lists',
    type: 'document',
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

export default list