import React from 'react'
import { useParams } from "react-router-dom";
import {useSinglePost} from '../hooks/useSinglePost.js';
import { PortableText } from "@portabletext/react";
import PortableComponent from '../components/PortableComponent';
import { urlFor } from "../utils/client";

// define components
const SinglePost = () => {

  const{slug} = useParams(); //grab slugs from url;
  
  // fecth that post 
    const { post, loading, error } = useSinglePost(slug);
    

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
   <div className="max-w-3xl mx-auto px-4 py-10">
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          className="w-full rounded-2xl mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-8">By {post.authorName}</p>
      <div className="prose max-w-none">
        <PortableText value={post.body} components={PortableComponent} />
      </div>
    </div>
  );
}

export default SinglePost
