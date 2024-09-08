import { Project, Page, Metadata} from "@/types";
import {createClient, groq} from "next-sanity"
import clientConfig from "./config/client-config"



export async function getProjects() : Promise<Project[]> { // Creates Client in which we can crate our GROQ calls
 return  createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current, 
            "image": image.asset->url,
            url,
            alt,
        }`
    )
}

export async function getProject(slug: string) : Promise<Project> {
    return  createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current, 
            "image": image.asset->url,
            url,
            alt,
            content,
            listDetails[] {
                name,
                listContent
            }
            ,
            
        }`, {slug}
    )
}

export async function getPages() : Promise<Page[]> { // Creates Client in which we can crate our GROQ calls
    return  createClient(clientConfig).fetch(
           groq`*[_type == "page"]{
               _id,
               _createdAt,
               title,
               "slug": slug.current, 
               "image": image.asset->url,
               url,
               alt,
           }`
       )
   }
export async function getPage(slug: string) : Promise<Page> {
    return  createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current, 
            "image": image.asset->url,
            alt,
            content,
            'form': forms->,
        }`, {slug}
    )
}

export async function getMetaData(slug: string = '') : Promise<Metadata> { // Creates Client in which we can crate our GROQ calls
    return  createClient(clientConfig).fetch(
           groq`*[_type == "metadata"][0]{
               _id,
               _createdAt,
               title,
               "logo": logo.asset->url,
               canonical,
               ogtitle,
               favicon,
               ogtitle,
               ogdescription,
               ogimage,
               ogurl,
               twittertitle,
               twitterimage,
               twittercard,
               author,
               showName,
               name,
           }`, {slug}
       )
   }