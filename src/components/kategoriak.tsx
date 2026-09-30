type ListaProps = {
  cim: string;
  elemek: string[];
  szamozott?: boolean;
};
function Kategoriak({ cim, elemek, szamozott = false }: ListaProps) {
  return (
    <div className="col-sm-4 kartya mb-2">
      <h2>{cim}</h2>
      <ul
        className={
          szamozott
            ? "list-group list-group-numbered"
            : "list-group"
        }
      >
        {elemek.map((elem, index) => (
          <li className="list-group-item" key={index}>
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Kategoriak;