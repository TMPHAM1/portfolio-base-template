const metadata = {
    name: 'metadata',
    title: 'SEO Metadata',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Website/Application Name',
            type: 'string',
            description: 'This should be the name of your application and what displays in the browser tab'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Use the page slug or empty for the home page'
        },
        {
            name: 'charset',
            title: 'Charset',
            type: 'string',

        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: "Description mainly for google search results and SEO"

        },
        {
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'string',
            description: 'This should be the URL that represents your primary website'
        },
        {
            name: 'viewport',
            title: 'Viewport',
            type: 'string',
            description: 'Viewport settings for responsive devices'
        },
        {
            name: 'favicon',
            title: 'Browser Icon',
            type: 'image',
            description: 'This should be in .ico format and will show up as an icon on your browser tab.',
            options: {hotspot: true},
            fields: [{
                name: 'alt',
                title: 'alt',
                type: 'string'
            }]
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'This will display the Logo on the Navbar',
            options: {hotspot: true},
            fields: [{
                name: 'alt',
                title: 'alt',
                type: 'string'
            }]
        },
        {
            name: 'showName',
            title: 'Show the Company Name next to the Logo',
            type: 'boolean',
            description: 'If the Logo does not have a name/title you can check this to hide/show a name'
        },
        {
            name: 'name',
            title: 'Name to display next to the Logo',
            type: 'string',
            hidden: ({document}: any) => !document.showName,
            description: 'This will display the Logo on the Navbar'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            description: 'This should be in .ico format and will show up as an icon on your browser tab.'
        },
        {
            name: 'ogtitle',
            title: 'OpenGraph (og) Title',
            type: 'string',
            description: 'This will display a title when your website is sent to a person important for SEO.'
        },
        {
            name: 'ogdescription',
            title: 'OpenGraph (og) Description',
            type: 'string',
            description: 'This will display a title when your website is sent to a person important for SEO, Try to keep it under 200 characters for best Results.'
        },
        {
            name: 'ogimage',
            title: 'OpenGraph (og) Image',
            type: 'string',
            description: 'Will Display an image that should be sent, this should be a URL'
        },     {
            name: 'ogurl',
            title: 'OpenGraph (og) URL',
            type: 'string',
            description: 'Will Display an image that should be sent, this should be a URL'
        },
        {
            name: 'twittertitle',
            title: 'Twitter  Title',
            type: 'string',
            description: 'This will display a title when your website is sent to a person important for SEO.'
        },
        {
            name: 'twitterdescription',
            title: 'Twitter Description',
            type: 'string',
            description: 'This will display a title when your website is sent to a person important for SEO, Try to keep it under 200 characters for best Results.'
        },
        {
            name: 'twitterimage',
            title: 'Twitter Image',
            type: 'string',
            description: 'Will Display an image that should be sent, this should be a URL'
        },     {
            name: 'twittercard',
            title: 'OpenGraph (og) Title',
            type: 'string',
            description: 'Will Display a Twitter Card if you have it configured and used properly'
        },
    ],
    initialValue: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1',
    }
}

export default metadata;