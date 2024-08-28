import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
export default  async function Prject() {
  const projects = await getProjects();
  return (
    <div className="mx-10">
      <h2 className="mt-12 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 gap-4 grid-cols-1">
      {projects.map((project

    )=> (
      <Link href={`projects/${project.slug}`} key={project.name}>
      <div key={project._id} className="border border-gray-500 rounded-lg shadow-lg py-5 px-4 min-h-50">
        { project.image && (
        <Image
        src={project.image}
        alt={project.name}
        width={750}
        height={300}
        className="object-cover rounded-lg border border-gray-500 min-h-72 max-h-32"
        ></Image>)}
        <div className=" px-2 text-center mt-2 font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
      </div>
      </Link>
    ))}
    </div>
    </div>
  )
}
