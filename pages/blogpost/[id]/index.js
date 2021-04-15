import Link from "next/link";
import Meta from "../../../components/Meta";
const blogpost = ({ blogpost }) => {
  return (
    <>
      <div>
        <Meta title={blogpost.title} />
        <h1>{blogpost.title}</h1>
        <p>{blogpost.sections[0].content}</p>
        <br />
        <Link href="/">
          <button className="btn btn-primary">Tilbage</button>
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
