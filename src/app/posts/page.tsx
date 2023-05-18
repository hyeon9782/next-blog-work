

import FilteringPosts from '@/components/posts/FilteringPosts';
import { getPosts } from '@/service/posts';

export default async function PostsPage() {

  const posts = await getPosts();
  const categories = [...new Set(posts.map(post => post.category))]

  return (
    <FilteringPosts posts={posts} categories={categories} />
  )
}
