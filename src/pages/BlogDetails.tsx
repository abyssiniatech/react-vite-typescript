import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-xl font-bold">Blog Details</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
};

export default BlogDetails;
