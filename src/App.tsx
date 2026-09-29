import Bevezeto from "./components/Bevezeto"
import Fejlec from "./components/fejlec"
import Fontos from "./components/Fontos"
import Lablec from "./components/lablec"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      {Fejlec()}
      {Bevezeto()}
      {Fontos()}
      {Lablec()}
    </>
  )
}

export default App
