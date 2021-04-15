import Link from "next/Link";

const BlogpostItem = ({ blogpost }) => {
  return (
    <div>
      <Link href={`/blogpost/${blogpost.id}`}>
        <a className="">
          <h3>{blogpost.title} &rarr;</h3>
          <p>Written by {blogpost.author}</p>
        </a>
      </Link>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">World</strong>
        <h3 class="mb-0">Featured post</h3>
        <div class="mb-1 text-muted">Nov 12</div>
        <p class="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#" class="stretched-link">
          Continue reading
        </a>
      </div>
    </div>
  );
};

export default BlogpostItem;
