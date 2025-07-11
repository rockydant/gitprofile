import { useParams, Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSanityBlogPostBySlug, Article } from '../../sanity/client';
import AvatarCard from '../avatar-card';
import CONFIG from '../../../gitprofile.config';
import { getSanitizedConfig } from '../../utils';

const sanitizedConfig = getSanitizedConfig(CONFIG);

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Article | null>(null);

  useEffect(() => {
    if (slug) {
      fetchSanityBlogPostBySlug(slug).then(setPost);
    }
  }, [slug]);

  if (!post) return <div className="text-center mt-10 text-base-content">Loading...</div>;

  return (
    <div className="fade-in min-h-screen bg-base-200 py-10 px-2">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* AvatarCard on the left */}
          <div className="w-full lg:w-1/3">
            <AvatarCard
              profile={{
                avatar: '', // No avatar in config, leave empty or use fallback
                name: sanitizedConfig.github?.username || '',
                bio: '',
                location: '',
                company: '',
              }}
              loading={false}
              avatarRing={sanitizedConfig.themeConfig?.displayAvatarRing ?? true}
              resumeFileUrl={sanitizedConfig.resume?.fileUrl}
              headlines={sanitizedConfig.headlines}
            />
          </div>
          {/* Blog detail card on the right */}
          <div className="w-full lg:w-2/3">
            <RouterLink to="/" className="text-sm text-primary hover:underline mb-4 inline-block">← Back to Home</RouterLink>
            <div className="card bg-base-100 shadow rounded-box p-6">
              <h1 className="text-3xl font-bold mb-2 text-base-content-important">{post.title}</h1>
              {post.thumbnail && (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="mb-4 w-full rounded-box object-cover max-h-96"
                />
              )}
              <div className="text-xs text-base-content opacity-60 mb-2">
                {post.publishedAt.toLocaleDateString()}
              </div>
              <div className="mb-4 text-base-content text-opacity-80 text-lg whitespace-pre-line">
                {post.description}
              </div>
              <div className="mb-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-block bg-base-300 rounded-full px-3 py-1 mr-2 mb-2 text-xs text-base-content opacity-70"
                  >
                    #{cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail; 