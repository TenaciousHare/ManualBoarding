export const Totals = () => {
  const HEADERS = ["", "", "A", "C", "TTL", "I"];

  return (
    <table className="totals">
      <thead>
        <tr>
          {HEADERS.map((header, index) => (
            <th key={index} className={header === "" ? "" : "label cell"}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="label long">rows 1-5</td>
          <td className="label cell">ZONE 1</td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
        </tr>
        <tr>
          <td className="label long">rows 6-28</td>
          <td className="label cell">ZONE 2</td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
        </tr>
        <tr>
          <td className="label long">rows 29-33</td>
          <td className="label cell">ZONE 3</td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell"></td>
        </tr>
        <tr>
          <td></td>
          <td className="label cell">TOTAL</td>
          <td className="cell"></td>
          <td className="cell"></td>
          <td className="cell final_total"></td>
          <td className="cell final_total"></td>
        </tr>
      </tbody>
    </table>
  );
};
