import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Users = () => {
  return (
    <>
      <Header title="Users List" />

      <ul className="space-y-2">
        <li>
          <Link to="/dashboard/users/1" className="text-blue-600 underline">
            User 1
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users/2" className="text-blue-600 underline">
            User 2
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Users;
