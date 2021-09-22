import React,{useState,useEffect} from 'react'
import './App.css';
import Main from  './components/Main'
import Login from './login/Login';

function App() {
  const[token,setToken]=useState()
  const[tokenID,setTokenID]=useState()
  //ZVIkBOEvbarGHH1jG7dx  ליאורה

// lmFHlQjOe6DI5IQknmib אהוד
//RUeo5KXnIWKOyZtstrZ4 מירי


useEffect(() => {
  const obj = JSON.parse(localStorage.getItem('cookies'))
  console.log(obj)
  if(obj){
    setToken(obj.id)
    setTokenID(obj.token)
  }
}, [])


  return (
    <div className="App">
      {token && tokenID?
      <Main
      setToken={setToken}
     token={token}
     setTokenID={setTokenID}
     tokenID={tokenID}
     /> 
    :<Login
    setToken={setToken}
    token={token}
    setTokenID={setTokenID}
    tokenID={tokenID}
    />}
    </div>
  );
}

export default App;
