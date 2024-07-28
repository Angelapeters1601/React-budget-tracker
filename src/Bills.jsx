import React from "react";

function Bills({
  rent,
  water,
  internet,
  insurance,
  electricity,
  extras,
  setRent,
  setWater,
  setInternet,
  setInsurance,
  setElectricity,
  setExtras,
  totalBills,
}) {
  return (
    <form className="expenses">
      <label htmlFor="expenses">Bills:</label>
      {/* <p className="label">Rent:</p> */}

      <input
        type="number"
        placeholder="Rent bill.."
        value={rent}
        onChange={(e) => setRent(Number(e.target.value))}
      />
      {/* <h2 className="label">Water:</h2> */}

      <input
        type="number"
        placeholder="Water bill.."
        value={water}
        onChange={(e) => setWater(Number(e.target.value))}
      />
      {/* <h2 className="label">Internet:</h2> */}
      <input
        type="number"
        placeholder="Internet bill.."
        value={internet}
        onChange={(e) => setInternet(Number(e.target.value))}
      />
      {/* <h2 className="label">Insurance:</h2> */}

      <input
        type="number"
        placeholder="Insurance bill.."
        value={insurance}
        onChange={(e) => setInsurance(Number(e.target.value))}
      />

      {/* <h2 className="label">Electricity:</h2> */}

      <input
        type="number"
        placeholder="Electricity bill.."
        value={electricity}
        onChange={(e) => setElectricity(Number(e.target.value))}
      />
      {/* <h2 className="label">Extras:</h2> */}

      <input
        type="number"
        placeholder="Extras/Miscellaneous.."
        value={extras}
        onChange={(e) => setExtras(Number(e.target.value))}
      />
      {/* <h2 className="label">Total bills:</h2> */}
      <input
        className="footer"
        type="number"
        placeholder="Total Bills.."
        value={totalBills}
        readOnly
      />
    </form>
  );
}

export default Bills;
