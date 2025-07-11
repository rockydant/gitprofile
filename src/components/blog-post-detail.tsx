import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSanityBlogPostBySlug, Article } from '../../src/sanity/client';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Article | null>(null);

  useEffect(() => {
    if (slug) {
      fetchSanityBlogPostBySlug(slug).then(setPost);
    }
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      {post.thumbnail && <img src={post.thumbnail} alt={post.title} className="mb-4" />}
      <div className="text-sm text-gray-500 mb-2">{post.publishedAt.toLocaleDateString()}</div>
      <div className="mb-4">{post.description}</div>
      <div>
        {post.categories.map((cat) => (
          <span key={cat} className="inline-block bg-base-300 rounded px-2 py-1 mr-2 text-xs">
            #{cat}
          </span>
        ))}
      </div>
      {/* Add more post content here if available */}
    </div>
  );
};

export default BlogPostDetail; 