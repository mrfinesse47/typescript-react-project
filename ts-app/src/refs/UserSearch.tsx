import { useState } from "react";

const UserSearch: React.FC = () => {
  const users = [
    { name: "Sara", age: 20 },
    { name: "Jevon", age: 20 },
    { name: "Shaniqua", age: 20 },
    { name: "Gurpreet", age: 20 },
    { name: "Manjinder", age: 20 },
  ];
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [name, setName] = useState("");
  const onClick = () => {
    const foundUser = users.find((user) => name === user.name);
    setUser(foundUser);
  };
  return (
    <div>
      User search
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
