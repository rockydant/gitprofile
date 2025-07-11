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
    <div className={`p-4 lg:p-10 min-h-full bg-base-300`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
        {/* AvatarCard on the left */}
        <div className="col-span-1">
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
        <div className="lg:col-span-2 col-span-1">
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
  );
};

export default BlogPostDetail; 