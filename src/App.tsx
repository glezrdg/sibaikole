import './App.css'
import {Layout} from './components/'
import {Home, About, Services, Portfolio, Contact} from './pages/'

function App() {

  return (
    <div className="App">
      <Layout>
        <Home />
        <About />
        <Services />
        <Portfolio /> 
        <Contact />
      </Layout>
    </div>
  )
}

export default App
