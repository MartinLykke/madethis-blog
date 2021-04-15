import AddNewPost from "../components/AddNewPost";
import BlogpostFeatured from "../components/BlogpostFeatured";
import BlogpostList from "../components/BlogpostList";
export default function Home({ blogposts }) {
  return (
    <div className="">
      <div className="container mt-5">
        <BlogpostFeatured blogposts={blogposts} />
      </div>
      <BlogpostList blogposts={blogposts} />
      <AddNewPost />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://job-test-blog.madethis.dev/posts");
  const blogposts = await res.json();

  return {
    props: {
      blogposts,
    },
  };
};
