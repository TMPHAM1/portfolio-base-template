import React from "react";
import { getPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { DynamicForm } from "../../(components)/DynamicForm";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const page = (await getPage(params.slug)) || "";

  return (
    <div className="mx-16 flex flex-col items-center">
      <h1 className="text-3xl drop-shadow-md  ">
        {page.title}
      </h1>
      {page.image && (
        <Image
          src={page.image}
          alt={page.title}
          width={500}
          height={500}
          className="mt-5 border-2 gray-700 rounded-xl lg:w-1/5 mx-auto"
        />
      )}

      {/* Content */}
      <div className="text-lg text-gray-700 mt-5 prose">
        <PortableText value={page.content} />
      </div>

      <div className="gap-5 w-full lg:w-[60%] py-5 lg:px-10 relative">
        <div className="border-gradient-div"></div>
        {page && (page.form ? <DynamicForm form={page.form} /> : null)}
      </div>
    </div>
  );
};

export default Page;
