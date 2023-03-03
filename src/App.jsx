import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './context/UserContext'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<IndexPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/account/:subpage?' element={<AccountPage /> }/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App