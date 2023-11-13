import { notFound } from "next/navigation";
import { getBlogPost } from "../../../data/blogs"
import { marked } from "marked";

export default function Page({ params }: { params: { slug: string } }) {
	const blog = getBlogPost(params.slug);
	if (!blog) notFound();
	const {
		imageSrc,
		title,
		author,
		date,
		description,
		content,
	} = blog;
    return (
        <div className="container mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
            <div className="pt-4 pb-8">
                <h1 className="font-semibold leading-6 text-center text-6xl pb-8">{title}</h1>
                <img src={imageSrc} alt={`${title} image`} className="object-cover w-full h-60 rounded-lg" />
            </div>
            {/* <h1 className="text-2xl font-bold mb-2">{title}</h1> */}
            <div className="flex justify-between items-center mb-4">
                {author && <span className="text-gray-500 sr-only">{author}</span>}
                {date && <span className="text-gray-500">{date}</span>}
            </div>
            <div className="text-gray-300">
                <div className="prose" dangerouslySetInnerHTML={{__html:marked.parse(content)}} />
            </div>
        </div>
    );
}