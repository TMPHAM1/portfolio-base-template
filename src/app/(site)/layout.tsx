import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/app/globals.css";
import Link from "next/link";
import { getPages, getMetaData, getSiteSettings } from "@/sanity/sanity-utils";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const revalidate = 10;

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getMetaData();
  console.log("this is meta", meta);
  return {
    title: meta.title ?? "Default Title",
    description: meta.description ?? "Default Description",
    icons: {
      icon: meta.favicon,
    },
    openGraph: {
      title: meta.ogtitle ?? meta.title,
      description: meta.ogdescription ?? meta.description,
      url: meta.ogurl,
      images: meta.ogimage ? [{ url: meta.ogimage }] : undefined,
    },
    twitter: {
      title: meta.twittertitle ?? meta.title,
      description: meta.twitterdescription ?? meta.description,
      images: meta.twitterimage ? [meta.twitterimage] : undefined,
    },
    authors: [{ name: meta.author }],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await getPages();
  const metadata = await getMetaData();
  const { primary, secondary, tertiary, additional } = await getSiteSettings();
  const styles = {
    "--color-primary": primary,
    "--color-secondary": secondary,
    "--color-tertiary": tertiary,
    "--additional": additional,
  } as React.CSSProperties;
  console.log("tHIS IS STYLES", styles);
  return (
    <html lang="en" style={styles}>
      <body>
        <header className="flex items-center justify-between px-10 py-5 border-b-2 border-gray-300">
          <Link href="/" className="flex items-center">
            {metadata && metadata.logo ? (
              <Image
                width={24}
                height={24}
                src={metadata.logo}
                alt={`${metadata.author} logo`}
                className="inline mr-2"
              />
            ) : (
              ""
            )}

            {metadata && metadata.showName ? (
              <span className="custom-gradient text-transparent  font-bold bg-clip-text text-3xl">
                {metadata.name}{" "}
              </span>
            ) : (
              ""
            )}
          </Link>
          <div className="flex item-center gap-5 text-sm text-gray-600en">
            {pages.map((page) => (
              <Link
                key={page._id}
                className="hover:underline"
                href={`/${page.slug}`}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <ToastContainer />
        <main className=" py-5  mx-auto">{children}</main>
      </body>
    </html>
  );
}
