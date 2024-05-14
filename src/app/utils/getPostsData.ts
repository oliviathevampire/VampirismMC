import { getPosts } from '@utils/MDXUtils';

export const getPostsData = () => {
    const posts = getPosts();
    return posts;
};