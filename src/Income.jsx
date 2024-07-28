function Income({
  incomeOne,
  incomeTwo,
  setIncomeOne,
  setIncomeTwo,
  totalIncome,
}) {
  return (
    <form className="income">
      <label htmlFor="income">Income:</label>
      <h2 className="label">Income One:</h2>
      <input
        placeholder="Income 1:"
        type="number"
        value={incomeOne}
        onChange={(e) => setIncomeOne(Number(e.target.value))}
      />
      <h2 className="label">Income Two:</h2>
      <input
        type="number"
        placeholder="Income 2:"
        value={incomeTwo}
        onChange={(e) => setIncomeTwo(Number(e.target.value))}
      />
      <h2 className="label">Total Income:</h2>
      <input
        className="footer"
        placeholder="Total Income"
        type="text"
        value={totalIncome}
        readOnly
      />
    </form>
  );
}

export default Income;
