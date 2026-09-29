import Bevezeto from "./components/Bevezeto"
import Fejlec from "./components/fejlec"
import Lablec from "./components/lablec"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      {Fejlec()}
      {Bevezeto()}
      {Lablec()}
    </>
  )
}

export default App
