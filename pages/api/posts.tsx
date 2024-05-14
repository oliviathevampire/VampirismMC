import fs from 'fs';
import path from 'path';

const POSTS_PATH = path.join(process.cwd(), '_posts');

export default function handler(req, res) {
    const postFilePaths = fs.readdirSync(POSTS_PATH)
        .filter(filePath => /\.mdx?$/.test(filePath))
        .map(filePath => ({
            slug: filePath.replace(/\.mdx?$/, ''),
        }));

    res.status(200).json(postFilePaths);
}