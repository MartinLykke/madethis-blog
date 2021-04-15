import postStyles from "../styles/BlogpostFT.module.css";
const BlogpostFeatured = ({ blogposts }) => {
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 className={postStyles.postTitle + " display-4 font-italic"}>
          {blogposts[0].title}
        </h1>
        <p className={postStyles.postcontent + " lead my-3"}>
          {blogposts[0].sections[0].content}
        </p>
        <p class="lead mb-0">
          <a href="/blogpost/1" class="text-white fw-bold">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlogpostFeatured;
