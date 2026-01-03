import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Header title="User Details" />
      <p>User ID: {id}</p>
    </>
  );
};

export default UserDetails;
