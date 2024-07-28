function Expenses() {
  return (
    <form className="expenses">
      <label htmlFor="expenses">Expenses:</label>
      <input type="number" placeholder="Gas..." value="Gas:" />
      <input type="number" placeholder="Travel..." value="Travel: " />
      <input type="number" placeholder="Leisure..." value="Leisure: " />
      <input type="number" placeholder="Repairs..." value="Repairs" />
      <input
        type="number"
        placeholder="House Maintenance.."
        value="House Maintenance:"
      />
      <input
        type="number"
        placeholder="Others/Miscellaneous..."
        value="Others/Miscellaneous:"
      />
      <input
        className="footer"
        type="number"
        placeholder="Total Expenses.."
        value="Total Expenses: "
        readOnly
      />
    </form>
  );
}

export default Expenses;
