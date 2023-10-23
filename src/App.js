import './App.css';
import AuthDetails from './components/AuthDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-evenly items-center'>
      <SignIn/>
      <AuthDetails/>
      <SignUp/>
    </div>
  );
}

export default App;
