import './App.css'
import CatFacts from './components/CatFacts'
import CookieClicker from './components/CookieClicker'
import Users from './components/Users'

function App() {
  return (
    <>
      <h1>React oppgave 2</h1>
      <p>Bruk av useState() og useEffect()</p>

      <h2>1. Cookie Clicker</h2>

      <CookieClicker />


      <h2>2. Cat Facts</h2>

      <CatFacts />

      
      <h2>3. Users</h2>

      <Users />
    </>
  )
}

export default App
