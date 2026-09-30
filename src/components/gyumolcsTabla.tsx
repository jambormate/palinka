import { gyumolcsok } from "../data/palinkak";

function GyumolcsTabla() {
  return (
    <div className="row mb-1" id="mibolLehetMegPalinka">
      <div className="col-sm-12 kartya mb-3">
        <h2>Miből készülhet gyümölcspárlat?</h2>
        <table className="table table-bordered">
          <tbody>
            <tr>
              {gyumolcsok.slice(0, 3).map((gyumolcs, index) => (
                <td key={index}>{gyumolcs}</td>
              ))}
            </tr>
            <tr>
              {gyumolcsok.slice(3, 6).map((gyumolcs, index) => (
                <td key={index}>{gyumolcs}</td>
              ))}
            </tr>
            <tr>
              {gyumolcsok.slice(6, 9).map((gyumolcs, index) => (
                <td key={index}>{gyumolcs}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default GyumolcsTabla;