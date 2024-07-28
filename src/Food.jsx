function Food({ foodOne, foodTwo, setFoodOne, setFoodTwo, totalFoodExpense }) {
  return (
    <form className="food">
      <label htmlFor="food">Food:</label>
      <h2 className="label">Groceries:</h2>
      <input
        type="number"
        placeholder="Moneny spent on deliveries:"
        value={foodOne}
        onChange={(e) => setFoodOne(Number(e.target.value))}
      />

      <h2 className="label">Eat Outs:</h2>
      <input
        type="number"
        placeholder="Money spent on restaurants:"
        value={foodTwo}
        onChange={(e) => setFoodTwo(Number(e.target.value))}
      />

      <h2 className="label">Total Money Spent On Food:</h2>
      <input
        className="footer"
        type="number"
        placeholder="Total Expenses"
        value={totalFoodExpense}
        readOnly
      />
    </form>
  );
}

export default Food;
