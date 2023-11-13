import fs from "fs"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import H1 from "@components/mdx/H1"
import HeroImage from "@components/mdx/HeroImage"
import React from "react"
import P from "@components/mdx/P"
import H2 from "@components/mdx/H2"
import Navbar from "@components/Navbar"
import '../../app/globals.css'
import PostHeader from "@components/PostHeader"
import BR from "@components/mdx/BR"
import { Heading } from "@components/mdx/Heading"
import { Paragraph } from "@components/mdx/Paragraph"
import { List } from "@components/mdx/List"
import { useState, useEffect } from 'react'

export default function PostPage({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

	return (
		<>
			<Navbar />
			<div className="container mx-auto rounded-lg shadow-lg text-white">
        <PostHeader title={source.frontmatter.title as string} coverImage={source.frontmatter.thumbnail as string} />
				<MDXRemote
					{...source}
					// specifying the custom MDX components
					components={{
						Heading,
            List,
						Paragraph,
						HeroImage,
						br: BR,
					}}
				/>
			</div>
		</>
	);
}
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" }
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string
  }>,
) {
  const { slug } = ctx.params!

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const postFile = fs.readFileSync(`_posts/${slug}.mdx`)

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  }
}