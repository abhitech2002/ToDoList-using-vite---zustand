import { useState } from "react";
import { UserProvider } from "./UserContext.jsx";
import ProfileView from "./components/ProfileView.jsx";
import ProfileEdit from "./components/ProfileEdit.jsx";

function App() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {isEditing ? (
          <ProfileEdit setIsEditing={setIsEditing} />
        ) : (
          <ProfileView setIsEditing={setIsEditing} />
        )}
      </div>
    </UserProvider>
  );
}

export default App;
