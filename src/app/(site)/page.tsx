"use client";
import { getMetaData, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default async function Home() {
  const projects = await getProjects();
  const metadata = await getMetaData();

  console.log(metadata);

  return (
    <div className="mx-10">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="animate-fade bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
          {metadata.name ?? metadata.name}
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Welcome to my Portfolio!
        <p className="text-lg mt-3">
          Feel free to check out a few of my projects below.
        </p>
      </p>

      <h2 className="mt-12 font-bold text-gray-700 text-3xl mb-10">
        My Projects
      </h2>
      <div className="mt-5 grid md:grid-cols-2 md:gap-8 gap-8 lg:grid-cols-3  grid-cols-1">
        {projects.map((project: any) => (
          <Link href={`portfolio/${project.slug}`} key={project.title}>
            <motion.div
              whileHover={{ y: -20 }}
              key={project._id}
              className="border border-gray-500 rounded-lg shadow-lg py-5 px-4 min-h-full"
            >
              {project.heroImage && (
                <Image
                  src={project.heroImage.url}
                  alt={project.title}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500 min-h-30 max-h-32"
                ></Image>
              )}
              <div className=" px-2 text-center mt-2 font-extrabold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                {project.title}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
