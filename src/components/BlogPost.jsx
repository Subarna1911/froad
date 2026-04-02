import React from 'react';
import { usePosts } from '../hooks/usePosts.js';
import { urlFor } from '../utils/client.js';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  // Using usePosts hook
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error fetching posts: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link to={`/blog/${post.slug.current}`} key={post._id} className="block transition-transform hover:scale-105">
          <article className="border p-4 rounded-lg h-full bg-white shadow-sm hover:shadow-md">
            {post.mainImage && (
              <img src={urlFor(post.mainImage).width(500).url()} alt={post.title} className="rounded-md mb-2" />
            )}
            <h2 className="text-xl font-bold hover:text-blue-600">{post.title}</h2>
            <p className="text-gray-600 mb-2 text-sm italic">By {post.authorName || 'Unknown Author'}</p>

            <div className='mt-4 text-gray-800 line-clamp-3 text-sm'>
              <PortableText value={post.body} />
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default BlogPost;


