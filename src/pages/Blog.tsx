// src/pages/Blog.tsx
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog-posts';

export const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{post.title}</h2>
            </Link>
            <time className="text-gray-500 text-sm mb-3 block">{post.date}</time>
            <p className="text-gray-700">{post.description}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};