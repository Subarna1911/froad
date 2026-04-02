import React, { useEffect } from "react";
import { usePosts } from "../hooks/usePosts.js";
import { urlFor } from "../utils/client.js";
import { PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import toast from "react-hot-toast";

const BlogPost = () => {
  const { posts, loading, error } = usePosts();

  useEffect(() => {
    if (error) toast.error("Failed to fetch posts");
  }, [error]);

  if (loading) return <Shimmer />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-500 text-sm mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
      {posts.map((post) => (
        <Link
          to={`/blog/${post.slug.current}`}
          key={post._id}
          className="block transition-transform hover:scale-105"
        >
          <article className="border rounded-2xl h-full bg-white shadow-sm hover:shadow-[6px_8px_0px_#0e1c2d] hover:-translate-y-0.5  overflow-hidden">
            {post.mainImage && (
              <div className="w-full h-50">
                <img
                  src={urlFor(post.mainImage).width(600).height(400).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                   <h2 className="text-xl font-bold hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-2 text-sm italic">
                  By {post.authorName || "Unknown Author"}
                </p>
                </div>
               
                <div>
                  <p>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-gray-800 line-clamp-3 text-sm">
                <PortableText value={post.body} />
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogPost;
