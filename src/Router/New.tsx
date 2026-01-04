import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const New = () => {
  const { id } = useParams<Params>();
  if (!id) {
    return <p>No product found</p>;
  }
  return (
    <div>New product ID: {id}</div>
  );
};

export default New;
