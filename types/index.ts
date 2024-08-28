import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    image: string;
    url: string;
    alt: string;
    content: PortableTextBlock[];
}



export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    alt: string;
    content: PortableTextBlock[];
}

export type Metadata = {   
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
    name: string;
    logo: string;
    showName: string;
}