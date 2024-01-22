import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Selections from "./components/Selections";
import FoopieList from "./components/FoopieList";
import Users from "./components/Users";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const url = "https://api.github.com/users";
  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h2>Loading ...</h2>
      </main>
    );
  }

  return (
    <div className="foopieStore">
      <Navbar />
      <Hero />
      <About />
      <Selections />
      <FoopieList />
      <Users users={users} removeUser={removeUser} />
      <Footer />
    </div>
  );
}

export default App;
