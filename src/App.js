import './App.css';
import {useEffect} from 'react'
import {requestForToken} from './firebase'
function App() {
  useEffect(
    () => {
      requestForToken()
    },
    [],
  )
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
