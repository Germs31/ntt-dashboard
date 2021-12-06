import './App.css';
import {clients} from './data'
import {useEffect, useState} from 'react'
function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(clients[2])
  
  useEffect( () => {
    getUsers()
  }, [])

  const getUsers = () => {
    setUsers(clients)
  }

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(users)}
      </header>
    </div>
  );
}

export default App;
