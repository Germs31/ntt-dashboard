import './App.css';
import {clients} from './data'
import {useEffect, useState} from 'react'
import Navigation from './Components/Navigation'
import ContainerHeader from './Components/ContainerHeader'
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
      <div className="app-body">
        <div className="activities-container">
          <ContainerHeader title="Activities" action="View All"/>

          <div className="activities">
            <div className="activity-header">
              <span>Recent</span>
            </div>

          </div>
        </div>
        <div className="messages-container">
          <ContainerHeader title="Messages" action="View All"/>

          <div className="messages">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
