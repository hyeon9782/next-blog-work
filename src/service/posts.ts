import path from 'path';
import { promises as fs} from 'fs'

export type Posts = {
    title: string,
    image: string,
    category: string,
    date: string,
    featured: boolean,
    path: string,
    description: string,
}

export async function getPosts(): Promise<Posts[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data);
}

export async function getPostsWithFeatured(featured: boolean): Promise<Posts[] | undefined> {
    const posts = await getPosts();
    return posts.filter(item => item.featured === featured);
}

export async function getPostsWithCategory(category: string): Promise<Posts[] | undefined> {
    const posts = await getPosts();
    return posts.filter(item => item.category === category);
}

export async function getPost(path: string): Promise<Posts | undefined> {
    const posts = await getPosts(); 
    return posts.find(item => item.path === path)
}