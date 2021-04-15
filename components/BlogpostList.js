import BlogpostItem from "./BlogpostItem";
const BlogpostList = ({ blogposts }) => {
  console.log("blogposts");
  console.log(blogposts);
  return (
    <>
      <div className="row mb-2">
        {blogposts.map((blogpost) => (
          <BlogpostItem blogpost={blogpost} />
        ))}
      </div>
    </>
  );
};

export default BlogpostList;
