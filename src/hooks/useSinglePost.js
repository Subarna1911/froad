import { useState, useEffect } from 'react';
import { client } from '../utils/client';

export function useSinglePost(slug) {
  const [data, setData] = useState({ post: null, loading: true, error: null });

  useEffect(() => {

    if (!slug) return;

    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "authorName": author->name,
      body
    }`;

    client.fetch(query, { slug })
      .then((post) => {
        if (!post) {
          setData({ post: null, loading: false, error: 'Post not found' });
        } else {
          setData({ post, loading: false, error: null });
        }
      })
      .catch((error) => setData({ post: null, loading: false, error: error.message }));
  }, [slug]);

  return data;
}
