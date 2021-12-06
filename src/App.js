import './App.css';
import {clients} from './data'
import {useEffect, useState} from 'react'
import Navigation from './Components/Navigation'
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
        <Navigation />
      </header>
    </div>
  );
}

export default App;
