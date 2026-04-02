import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogPost = async () => {
      try {
        const response = await fetch("http://froad.local/wp-json/wp/v2/posts");
        const blogData = await response.json();

        setPosts(blogData); // ✅ store data
        console.log("Fetched data:", blogData);
      } catch (err) {
        console.log("Getting error while fetching data:", err);
      } finally {
        console.log("Done fetching");
      }
    };

    blogPost(); // ✅ CALL the function
  }, []);



  return (
   <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>
      ))}
    </div>
  )
}

export default Posts
