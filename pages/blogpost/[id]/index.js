import Link from "next/link";
import { ArrowLeft, Share2, ThumbsUp } from "react-feather";
import Meta from "../../../components/Meta";

const blogpost = ({ blogpost }) => {
  let blogpostDate = blogpost.created_at;
  blogpostDate = blogpostDate.substring(0, blogpostDate.length - 14);
  return (
    <>
      <div className="mt-4">
        <Meta title={blogpost.title} />

        <article className="blog-post">
          <h2 class="blog-post-title">{blogpost.title}</h2>
          <p class="blog-post-meta">
            Posted {blogpostDate} By{" "}
            <a href="https://www.linkedin.com/company/madethisdk/">
              {blogpost.author}
            </a>
          </p>

          <p>{blogpost.sections[0].content}</p>
          <hr></hr>
        </article>
        <button className="btn btn-success mb-5">
          <ThumbsUp /> Like
        </button>
        <button className="btn btn-primary mb-5 ml-2">
          <Share2 /> Share
        </button>
        <br></br>
        <Link href="/">
          <button className="btn btn-primary rounded-pill">
            <ArrowLeft size={18} />
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://job-test-blog.madethis.dev/posts/${context.params.id}`
  );
  const blogpost = await res.json();
  return {
    props: {
      blogpost,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://job-test-blog.madethis.dev/posts`);
  const blogposts = await res.json();
  const ids = blogposts.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default blogpost;
