type User = {
  id: number;
  username: string;
  imageUrl: string;
  position: string;
};

type Props = {
  users: User[];
};

const List = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="bg-indigo-500 m-auto w-[300px] text-white flex flex-col rounded justify-center items-center mb-2">
          <img className="w-22 rounded-full object-cover object-fill shadow-lg" src={user.imageUrl} alt={user.username} width={80} />

          <p className="p-2 text-white text-3xl">{user.id}</p>
          <p className="p-2 text-white text-3xl">{user.username}</p>
          <p className="text-2xl p-2">{user.position}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
