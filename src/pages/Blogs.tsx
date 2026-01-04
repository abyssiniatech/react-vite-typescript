import { Link } from "react-router-dom";
import { type Blog } from "../types/blog";
const blogs: Blog[] = [
  { id: 1, title: "React Router", content: "Learn routing" },
  { id: 2, title: "Context API", content: "Global state" },
];

const Blogs = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Blogs</h1>
      {blogs.map(blog => (
        <Link
          key={blog.id}
          to={`/blogs/${blog.id}`}
          className="block underline"
        >
          {blog.title}
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
