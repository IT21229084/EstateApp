import './App.css'
import NavBar from './components/Navbar/NavBar'
import './layout.scss'
import HomePage from './routes/homePage/HomePage'
function App() {

  return (
    <div className='layout'>
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
     
    </div>
  )
}

export default App
