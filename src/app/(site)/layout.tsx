import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/globals.css"
import Link from "next/link";
import { getPages, getMetaData } from "@/sanity/sanity-utils";
import Image from "next/image";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Website Example",
  description: "General Portfolio Template using Sanity",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get Pages to populate the navigation bar
  const pages= await getPages();
  const metadata = await getMetaData();
  console.log(metadata);
  return (
    <html lang="en">
      <body >
        <header className="flex items-center justify-between px-10 py-5 border-b-2 border-gray-300">
          <Link 
          href="/"
          className="flex items-center"
          >
          {metadata && metadata.logo ? <Image width={24} height={24} src={metadata.logo} alt={`${metadata.author} logo`} className="inline mr-2"/> : ''}
          
          {metadata && metadata.showName ?<span className="custom-gradient text-transparent  font-bold bg-clip-text text-3xl" >{metadata.name} </span> : ''}
          </Link>
          <div className="flex item-center gap-5 text-sm text-gray-600en">
            {pages.map((page)=> (
              <Link key={(page._id)}
                  className="hover:underline"
                  href={`/${page.slug}`
              }>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="md:py-20 py-5 lg:py-20 mx-auto">{children}</main>
      </body>
    </html>
  );
}
