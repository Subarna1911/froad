// src/hooks/usePosts.js
import { useState, useEffect } from 'react';
import { client } from '../utils/client';

export function usePosts() {
    const [data, setData] = useState({ posts: [], loading: true, error: null });

    useEffect(() => {
        const query = `*[_type == "post"] | order(_createdAt desc){
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "authorName": author->name ,
      body,
    }`;

        client.fetch(query)
            .then((posts) => setData({ posts, loading: false, error: null }))
            .catch((error) => setData({ posts: [], loading: false, error: error.message }));
    }, []);

    return data;
}
