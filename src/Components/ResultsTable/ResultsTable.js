const ResultsTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                INTITIAL -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
