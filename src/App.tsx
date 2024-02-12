import axios from "axios";
import { FC, useEffect, useState } from "react";
import User from "./components/User";
import { AppProps, Users } from "./App.types";

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await axios.get(
  //         "https://randomuser.me/api/?results=10"
  //       );
  //       console.log(data);
  //       setUsers(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getUsers();
  // }, []);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Show Users</button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ login, name, email }) => {
          return <User key={login.uuid} name={name} email={email} />;
        })}
      </ul>
    </div>
  );
};

export default App;
