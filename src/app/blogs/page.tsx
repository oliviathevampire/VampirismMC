import React from 'react';
import { getPosts } from '@utils/MDXUtils';
import Link from 'next/link';

export const preload = () => {
	void getPosts()
}

export default async function Blogs() {
	const posts = getPosts()
	return (
		<div className="text-white min-h-screen">
			<div className="container mx-auto p-4">
				<div className="pt-4 pb-8 border-b border-gray-600">
					<h1 className="font-semibold leading-6 text-center text-6xl">Blogs</h1>
				</div>
				<div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{posts.map((post) => (
					  <li
						key={post.filePath}
						className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg text-white h-full"
					  >
						<Link
						  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
						  href={`/posts/[slug]`}
						  className="block focus:outline-none focus:ring-4"
						>
							{post.data.thumbnail && (
							<div className="flex-shrink-0">
								<img src={post.data.thumbnail} alt={`${post.data.title} image`} className="object-cover w-full h-48 rounded-lg" />
							</div>
							)}
							<h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
							{post.data.description && (
							<p className="text-lg font-normal text-neutral-400 flex-grow pt-4">
								{post.data.description}
							</p>
							)}
							<div className="flex pt-6 space-x-1 text-sm text-gray-500">
								{post.data.author && <span className="text-gray-500">{post.data.author}</span>}
								{post.data.author && post.data.date && <span aria-hidden="true"> · </span>}
								{post.data.date && <span className="text-gray-500">{post.data.date}</span>}
							</div>
						</Link>
					  </li>
					))}
				</div>
			</div>
		</div>
	)
}