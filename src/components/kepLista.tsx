import { gyumolcsKartyak } from "../data/palinkak";
import GyumolcsKartya from "./gyumolcsKartya";
function KepLista() {
  return (
    <div className="row mb-1">
      {gyumolcsKartyak.map((gyumolcs) => (
        <GyumolcsKartya
          key={gyumolcs.nev}
          adat={gyumolcs}
        />
      ))}
    </div>
  );
}
export default KepLista;