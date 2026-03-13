import { useParams } from "react-router-dom";
import BlogTemplate from "../components/BlogTemplate";
import NotFound from "../components/NotFound";
import { getAllBlogPosts, getBlogPostBySlug } from "../data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getAllBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return <BlogTemplate post={post} relatedPosts={relatedPosts} />;
}
