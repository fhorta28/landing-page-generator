import './App.css'
import Button from './components/Button'

const App = props => {
  return (
    <>
      <Button content='Bouton test' onClick={() => console.log("Bouton test")}/>
    </>
  )
}

export default App
