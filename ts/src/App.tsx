import { useState } from 'react'
import 'App.css'
import DashboardPage from 'Page'
import AuthForm from 'Login';
import { getUser, getUsers, login } from 'api/collections';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const handleSubmit = async (data: { email: string, password: string }) => {
    //console.log('Form submitted with data:', data);
    // const user = getUser(data.email, data.password)
    // console.log(user)
    // const c= getUsers();
    // console.log(c);
    
    
    try {
      const loginResult: boolean = await login(data.email, data.password);
      if (loginResult) {
          setIsLoggedIn(true);
      } else {
          console.log("Login failed");
      }
  } catch (error) {
      console.error("Error during login:", error.message);
  }
  
  
    // if (user != null) {
    //   setIsLoggedIn(true)
    // }
  };

  return (
    <div>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <AuthForm isSignup={false} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App
