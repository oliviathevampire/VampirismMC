import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH: string = path.join(process.cwd(), '_posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths: string[] = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path: string) => /\.mdx?$/.test(path));

type Post = {
  content: string;
  data: any;
  filePath: string;
};

export const sortPostsByDate = (posts: Post[]): Post[] => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return bDate.valueOf() - aDate.valueOf();
  });
};

export const getPosts = (): Post[] => {
  let posts: Post[] = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  posts = sortPostsByDate(posts);

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  if (!slug) {
      throw new Error("Slug is undefined.");
  }
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(postFilePath)) {
      throw new Error(`No post found for slug ${slug}`);
  }
  const source = fs.readFileSync(postFilePath, 'utf8');

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
      mdxOptions: {},
      scope: data,
  });

  return { mdxSource, data, postFilePath };
};

type PostBySlug = {
  title: string;
  slug: string;
};

export const getNextPostBySlug = (slug: string): PostBySlug | null => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost!);

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return null;

  const nextPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug: string): PostBySlug | null => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost!);

  const post = posts[currentPostIndex + 1];
  // no prev post foundw
  if (!post) return null;

  const previousPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};

// A function to get all post slugs (file names)
export const getPostSlugs = (): string[] => {
  const postDirectory = path.join(process.cwd(), '_posts');
  return fs.readdirSync(postDirectory)
    .filter((filename) => /\.mdx?$/.test(filename)) // Only include .md(x) files
    .map((filename) => filename.replace(/\.mdx?$/, '')); // Remove the file extensions to get the slugs
};