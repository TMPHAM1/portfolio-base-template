import { getProject} from '@/sanity/sanity-utils';
import {PortableText, PortableTextComponents} from '@portabletext/react'

import Image from 'next/image';

type Props = {
    params: {project: string}; 
}

const Project = async ({params} : Props) => {
    const slug = params.project;
    const project = await getProject(slug);
    console.log('tHIS IS PROJECT', project);
    const components: PortableTextComponents = {
        marks: {
            // Ex. 1: custom renderer for the em / italics decorator
            em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
        },
        list: {
          // Ex. 1: customizing common list types
          bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
          number: ({children}) => <ol className="mt-lg">{children}</ol>,
      
          // Ex. 2: rendering custom lists
          checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
        },
        listItem: {
            // Ex. 1: customizing common list types
            bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
        
            // Ex. 2: rendering custom list items
            checkmarks: ({children}) => <li>✅ {children}</li>,
          },
      }
  return (
    <div>
        <header className="grid grid-cols-1 md:grid-cols-2 items-center  my-5">
            <h1 className="text-3xl drop-shadow-md text-center custom-gradient bg-clip-text text-transparent">{project.name}</h1>
         
        </header>
        {/* Content */}
        <div className="text-lg text-gray-700 mt-5 grid md:grid-cols-2 grid-cols-1 px-2">

             {/* Image */}
        <Image
            alt={project.name}
            src={project.image}
            width={800}
            height={800}
            className="border gray-700 object-cover rounded-xl">
   
       </Image>
      
            <div className="px-5 whitespace-break-spaces">
            <h1 className="text-center text-2xl custom-gradient bg-clip-text text-transparent md:col-start-2  font-semibold my-auto mt-2 mb-2">Summary</h1>
            <div>
            <PortableText  value={project.content} components={components}/> 
            </div>
            <div className="text-center mt-10">
            <a href={project.url} title="View Project" target="_blank" rel="noopner noreferrer" 
            className="hover:bg-gray-100 hover:bg-transparent rounded-lg hover:text-gray-500 w-1/5 text-center font-bold py-3 px-4 whitespace-nowrap   transition mt-2 text-white custom-gradient">
            View Project
        </a>
            </div>
            </div>
        </div>
        <div className="grid my-10 gap-12 md:grid-cols-4 px-5">
            {project.listDetails && project.listDetails.map(listItem=> {

                return (
                    <div key={listItem.name} className="min-w-full flex flex-col justify-items-center">
                    <h1 className="text-3xl text-center custom-gradient bg-clip-text text-transparent">{listItem.name}</h1>
                    <hr/>
                    <ul className="list-disc marker:text-pink-400 mx-auto">
                        {listItem.listContent.map((bullet,index) => <li key={`${listItem.name}` + index}>{bullet}</li>)}
                    </ul>
            </div>

                )
            })}
            
        </div>
   
        </div>
  )
}

export default Project;