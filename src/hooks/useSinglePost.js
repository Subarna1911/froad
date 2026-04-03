import { useState, useEffect } from 'react';
import { client } from '../utils/client';

export function useSinglePost(slug) {
  const [data, setData] = useState({
    post: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "authorName": author->name,
      body
    }`;

    setData(prev => ({ ...prev, loading: true }));

    client.fetch(query, { slug }, { signal: controller.signal })
      .then((post) => {
        if (!post) {
          setData({ post: null, loading: false, error: 'Post not found' });
        } else {
          setData({ post, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setData({ post: null, loading: false, error: error.message });
        }
      });

    // ✅ CLEANUP FUNCTION
    return () => {
      controller.abort(); // cancels the request
    };

  }, [slug]);

  return data;
}