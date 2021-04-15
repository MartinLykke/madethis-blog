import BlogpostItem from "./BlogpostItem";
const BlogpostList = ({ blogposts }) => {
  return (
    <>
      {blogposts.map((blogpost) => (
        <div>
          <BlogpostItem blogpost={blogpost} />
        </div>
      ))}
    </>
  );
};

export default BlogpostList;
