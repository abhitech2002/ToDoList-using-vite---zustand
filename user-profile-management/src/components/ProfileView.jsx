import React, { useContext } from "react";
import { UserContext } from "../UserContext.jsx";

const ProfileView = ({ setIsEditing }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-700">{user.email}</p>
        <p className="text-gray-700 mt-2">{user.bio}</p>
        <p className="text-gray-700 mt-2">{user.location}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};


export default ProfileView