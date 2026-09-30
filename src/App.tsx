import "bootstrap/dist/css/bootstrap.min.css";
import Bevezeto from "./components/Bevezeto";
import Fejlec from "./components/fejlec";
import Fontos from "./components/Fontos";
import Kategoriak from "./components/kategoriak";
import GyumolcsTabla from "./components/gyumolcsTabla";
import KepLista from "./components/kepLista";
import Lablec from "./components/lablec";

import {
  alapanyagok,
  nepszeruPalinkak,
  izEsIllatjegyek,
} from "./data/palinkak";

function App() {
  return (
    <>
      <div className="container">
        <Fejlec/>

        <Bevezeto/>

        <div className="row mb-2">
          <Kategoriak
            cim="Gyakori alapanyagok"
            elemek={alapanyagok}
          />

          <Kategoriak
            cim="Népszerű pálinkák"
            elemek={nepszeruPalinkak}
            szamozott={true}
          />

          <Kategoriak
            cim="Íz- és illatjegyek"
            elemek={izEsIllatjegyek}
            szamozott={true}
          />
        </div>

        <GyumolcsTabla/>

        <KepLista/>

        <Fontos/>
      </div>

      <Lablec/>
    </>
  );
}

export default App;
