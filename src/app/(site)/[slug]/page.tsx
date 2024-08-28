import React from "react";
import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = await getPage(params.slug) || '';
  return (
    <div className="mx-16 flex flex-col items-center">
        <h1 className="text-3xl drop-shadow-md  bg-gradient-to-r from-pink-500 yellow-100 to-amber-500 bg-clip-text text-transparent">
          {page.title}
        </h1>
      {page.image && (
        <Image
          src={page.image}
          alt={page.title}
          width={200}
          height={200}
          className="mt-5 border-2 gray-700 rounded-xl w-1/5 mx-auto"
        />
      )}

      {/* Content */}
      <div className="text-lg text-gray-700 mt-5 prose">
        <PortableText value={page.content} />
      </div>
    </div>
  );
};

export default Page;
