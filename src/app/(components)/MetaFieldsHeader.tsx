import React from 'react'


type Props = {
    title:string;
    charset: string;
    description: string;
    viewport: string;
    canonicalUrl: string;
    ogtitle: string;
    ogdescription: string;
    ogimage:string;
    ogurl: string;
    twittertitle: string;
    twitterdescription: string;
    twitterimage:string;
    twittercard: string;
    author:string;
    favicon: string;
}

const MetaFieldsHeader = (props: Props) => {
  return (
    <head>
    <meta charSet={props.charset} />
    <meta name="viewport" content={props.viewport} />

    <title>{props.title}</title>

    <meta name="description" content={props.description}/>

    <link rel="canonical" href={props.canonicalUrl} />


    <meta property="og:title" content={props.ogtitle} />
    <meta property="og:description" content={props.ogdescription}/>
    <meta property="og:image" content={props.ogimage} />
    <meta property="og:url" content={props.ogurl} />


    <meta name="twitter:title" content={props.title}/>
    <meta name="twitter:description" content={props.twitterdescription} />
    <meta name="twitter:image" content={props.twitterimage} />
    <meta name="twitter:card" content={props.twittercard} />

  
    <link rel="icon" href={props.favicon} type="image/x-icon" />

  
    <meta name="author" content={props.author}/>


    <meta name="application-name" content={props.title}/>

</head>
  )
}

export default MetaFieldsHeader