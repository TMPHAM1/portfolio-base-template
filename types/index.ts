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
    form: FormProps;
}

export type Field = {
    label: string;
    type: string;
    _type: string;
    placeholder: string;
    name: string;
    rows?: number;
}

export type FormProps = {
    url: string;
    title: string;
    description: string;
    headers: [{
        key: string;
        value: string;
    }]
    fields: Field[];
}

export type List = {
    name: ""
    listContent: String[];
}

export type Form = {
    _id: string;
    _createdAt: Date;
    title: string;
    description: string;
    formFields: FormFields[]
}

export type FormFields = {
    label: string;
    name: string;
    placeholder: string;
    type: any;
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
    listDetails: List[];
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