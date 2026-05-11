import { useRoutes } from 'react-router-dom'
import './App.css'
import RoutesManagement from './pages/routes-management/RoutesManagement'

function App() {

  const routs = useRoutes(RoutesManagement)

  return routs
}

export default App
