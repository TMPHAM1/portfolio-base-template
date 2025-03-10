import { getPortfolio } from "@/sanity/sanity-utils";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function PortfolioItem({ params }: {params: {slug: string}}) {
  if (!params?.slug) {
    return <div>Error: Missing slug parameter.</div>;
  }

  const portfolio = await getPortfolio(params.slug);
  if (!portfolio) return <div>Portfolio not found.</div>;

  return (
    <div className="container mx-auto px-4 ">
      {/* Full-Width Hero Image */}
      {portfolio.heroImage && (
        <div className="relative w-full mb-8 h-[50vh]">
          <Image
            src={portfolio.heroImage.asset.url}
            alt={portfolio.title}

            layout="fill" // This tells the image to fill the parent container
          objectFit="cover" // Ensures the image covers the container without stretching
          />
        </div>
      )}

      {/* Render Sections */}
      {portfolio.sections?.length > 0 &&
        portfolio.sections.map((section: any, index: number) => (
          <div key={index} className="my-6">
            <h2 className="text-2xl font-semibold mb-2">{section.header}</h2>
            {section.sectionType === "text" && (
              <div className="portable-text"> 
              <PortableText value={section.content}  />
              </div>
            )}
            {section.sectionType === "fullImage" && section.fullImage && (
          <div className="max-w-full flex flex-row justify-center ">
  {section.sectionType === "fullImage" && section.fullImage && (
    <Image
      src={section.fullImage.asset.url}
      alt="Section Image"
      width={800}
      height={600}
      objectFit="contain"  // Ensure the image stays within the container size without stretching
      className="rounded-lg shadow-md"
    />
  )}
</div>
            )}
            {section.sectionType === "multiImage" && section.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {section.images.map((img: any, idx: number) => (
                  <Image
                    key={idx}
                    src={img.asset.url}
                    alt={`Image ${idx + 1}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
              {section.sectionType === "multiList" && section.listDetails?.length > 0 && (
                   <div className="grid my-10  md:grid-cols-3 w-full px-5">
                       {section.listDetails && section.listDetails.map( (listItem : any)=> {

                return (
                    <div key={listItem.name} className="min-w-full flex flex-col justify-items-center">
                    <h1 className="text-xl text-center">{listItem.name}</h1>
              
                    <ul className="mt-5 text-center">
                        {listItem.listContent.map((bullet: any,index: number) => <li key={`${listItem.name}` + index}>{bullet}</li>)}
                    </ul>
            </div>

                )
            })}
            </div>
            )}
          </div>
        ))}
    </div>
  );
}
