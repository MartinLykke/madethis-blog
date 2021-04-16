import Link from "next/link";
import { Bell } from "react-feather";

const BlogpostItem = ({ blogpost }) => {
  let blogpostDate = blogpost.created_at;
  blogpostDate = blogpostDate.substring(0, blogpostDate.length - 14);
  return (
    <div className="col-md-6">
      <div className="col-md-12 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-sm p-4 d-flex flex-column position-static">
          <Link href={`/blogpost/${blogpost.id}`}>
            <div>
              <strong class="d-inline-block mb-2 text-primary">
                <Bell /> News
              </strong>
              <h3 class="mb-0">{blogpost.title} </h3>
              <div class="mb-1 text-muted">
                Posted {blogpostDate} By {blogpost.author}
              </div>

              <a href="#" class="stretched-link text-primary-orange">
                Read
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogpostItem;
