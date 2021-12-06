import './App.css';
import {clients} from './data'
import {useEffect, useState} from 'react'
import Navigation from './Components/Navigation'
import ContainerHeader from './Components/ContainerHeader'
import Activity from './Components/Activity'
import MessageBlock from './Components/MessageBlock'
function App() {
  const [users, setUsers] = useState([])
  const [currentUser] = useState(clients[2])
  
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

            { users.map((user, index) => {
              return (
                <Activity
                  key={index}
                  name={user.fullName}
                  img={user.profileImg}
                  active={user.active}
                  subMsg={user.subMessage}
                  paid={user.pricePaid}
                  crypto={user.crypto}
                  imgBgColor={user.imgBgColor} />
              )
            })}

          </div>
        </div>
        <div className="messages-container">
          <ContainerHeader title="Messages" action="View All"/>

          <div className="messages">
            <MessageBlock user={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
