import React from 'react';
import Link from 'next/link';
import { Blog } from '../data/blogs';

interface Props {
	blog:Blog;
}

const BlogCard: React.FC<Props> = ({ 
	blog: {
		title,
		description,
		author = 'OliviaTheVampire',
		date,
		imageSrc,
		slug
	}
}) => {
  return (
	<div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg text-white h-full">
		<Link href={`/blogs/${slug}`} passHref>
			<div className="flex-shrink-0">
				<img src={imageSrc} alt={`${title} image`} className="object-cover w-full h-48 rounded-lg" />
          	</div>
		</Link>
        <div className="pt-3 flex flex-col justify-between flex-1">
			<Link href={`/blogs/${slug}`} passHref>
				<h3 className="text-2xl font-semibold leading-none tracking-tighter">{title}</h3>
			</Link>
			<p className="text-lg font-normal text-neutral-400 flex-grow pt-4">{description}</p>
			<div className="flex pt-6 space-x-1 text-sm text-gray-500">
				{author && <span className="text-gray-500">{author}</span>}
				{author && date && <span aria-hidden="true"> · </span>}
				{date && <span className="text-gray-500">{date}</span>}
			</div>
		</div>
	</div>
  );
};

export default BlogCard;