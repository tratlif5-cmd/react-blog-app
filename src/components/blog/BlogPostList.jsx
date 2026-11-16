import BlogPost from "./BlogPost";

function BlogPostList({ posts }) {
  return (
    <section id="posts" aria-label="Blog posts">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
}

export default BlogPostList;
