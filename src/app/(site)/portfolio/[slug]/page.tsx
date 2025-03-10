import { getPortfolio } from "@/sanity/sanity-utils";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function PortfolioItem({ params }) {
    console.log(params);
  if (!params?.slug) {
    return <div>Error: Missing slug parameter.</div>;
  }

  const portfolio = await getPortfolio(params.slug);
  console.log('tHIS IS PORTFOLIO', portfolio)
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
        portfolio.sections.map((section, index) => (
          <div key={index} className="my-6">
            <h2 className="text-2xl font-semibold mb-2">{section.header}</h2>
            {section.sectionType === "text" && (
              <PortableText value={section.content} className="text-gray-700" />
            )}
            {section.sectionType === "fullImage" && section.fullImage && (
              <Image
                src={section.fullImage.asset.url}
                alt="Section Image"
                width={1800}
                height={600}
                className="rounded-lg shadow-md"
              />
            )}
            {section.sectionType === "multiImage" && section.images?.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {section.images.map((img, idx) => (
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
          </div>
        ))}
    </div>
  );
}
