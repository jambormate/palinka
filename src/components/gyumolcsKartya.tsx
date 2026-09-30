import type { GyumolcsKartyaAdat } from "../data/palinka";
type GyumolcsKartyaProps = {
  adat: GyumolcsKartyaAdat;
};
function GyumolcsKartya({ adat }: GyumolcsKartyaProps) {
  return (
    <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
      <h2>{adat.nev}</h2>
      <img
        src={adat.kep}
        className="img-fluid"
      />
      <p className="mt-2">{adat.leiras}</p>
    </div>
  );
}
export default GyumolcsKartya;