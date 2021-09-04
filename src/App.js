import './App.css';
import { useState } from 'react';
import GetUserComponent from './components/GetUserComponent/GetUserComponent';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  return (
    <div className="App">
      <div className="App-header">
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}/>
        ):(
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
        )}
      </div>
    </div>
  );
}

export default App;
