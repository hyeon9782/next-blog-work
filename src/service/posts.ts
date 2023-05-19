import path from 'path';
import { readFile } from 'fs/promises'

export type Posts = {
    title: string,
    category: string,
    date: string,
    featured: boolean,
    path: string,
    description: string,
}

export type PostData = Posts & { content: string; next: Posts | null; prev: Posts | null; };

export async function getPosts(): Promise<Posts[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    return readFile(filePath, 'utf-8')
        .then<Posts[]>(JSON.parse)
        .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data/posts', `${fileName}.md`)
    const posts = await getPosts()
    const post = posts.find(post => post.path === fileName);
    if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length ? posts[index + 1] : null;
    const content = await readFile(filePath, 'utf-8');
    return { ...post, content, next, prev }
}