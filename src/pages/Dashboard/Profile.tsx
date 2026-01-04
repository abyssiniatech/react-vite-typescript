import img from "./surafel.JPG";

const Profile = () => {
  return (
    <div className="w-60 bg-teal-700  text-white flex-col m-auto justify-center items-center flex border border-gray-400 rounded">
      <img src={img} alt="Profile" className="w-30 list-image-none rounded-full" />
      <h1>Profile Page</h1>
      <p>I am  softwareengineer</p>
      <p>Surafel@gmail.com</p>
    </div>
  );
};

export default Profile;
