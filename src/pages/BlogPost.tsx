// src/pages/BlogPost.tsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blog-posts';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Blog
      </Link>
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <time className="text-gray-500 text-sm block mb-8">{post.date}</time>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};