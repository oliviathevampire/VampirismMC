export interface Blog {
	title: string;
	description: string;
    content: string;
	author?: string;
	date?: string;
	imageSrc: string;
	slug: string;
}

export function getBlogPost(slug: string) {
    return blogPosts.find(post => post.slug === slug);
}

export const blogPosts: Blog[] = [
    { title: 'What is VampirismMC?', description: 'Explore the dark and enchanting world of VampirismMC, a Minecraft server like no other.', imageSrc: "https://placehold.co/200x150?text=What%20is%20VampirismMC", slug: "what-is-vampirismmc", content: "# Test\n## this is a test" },
    { title: 'Unveiling the Unique Gameplay Mechanics of VampirismMC', description: 'Discover the unique gameplay mechanics that make our server truly special.', imageSrc: "https://placehold.co/200x150?text=Unique%20Gameplay%20Mechanics", slug: "unique-gameplay-mechanics", content: "" },
    { title: 'Meet the NPCs of VampirismMC', description: 'Get to know the characters that make our world come alive.', imageSrc: "https://placehold.co/200x150?text=Meet%20the%20NPCs", slug: "meet-the-npcs", content: "" },
    // ... more posts
];