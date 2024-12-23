import './App.css'
import { MenuProvider } from './components/Header/contexts/MenuContext'
import HomePage from './pages/HomePage'

function App() {

  return (
    <MenuProvider>
      <HomePage />
    </MenuProvider>
  )
}

export default App
