import "./App.css";
import React, { useState } from "react";
import Income from "./Income";
import Food from "./Food";
import Bills from "./Bills";
import Expenses from "./Expenses";
import Debt from "./Debt";
import Savings from "./Savings";
import Total from "./Total";

function App() {
  const [incomeOne, setIncomeOne] = useState("");
  const [incomeTwo, setIncomeTwo] = useState("");
  const [foodOne, setFoodOne] = useState("");
  const [foodTwo, setFoodTwo] = useState("");
  //   bills
  const [rent, setRent] = useState("");
  const [water, setWater] = useState("");
  const [internet, setInternet] = useState("");
  const [insurance, setInsurance] = useState("");
  const [electricity, setElectricity] = useState("");
  const [extras, setExtras] = useState("");

  const totalIncome = incomeOne + incomeTwo;
  const totalFoodExpense = foodOne + foodTwo;
  const totalBills = rent + water + internet + insurance + electricity + extras;

  return (
    <div className="app">
      <div>
        <h2 className="title">
          Budget <span>Tracker</span>
        </h2>
        <div className="first-row">
          <Income
            incomeOne={incomeOne}
            incomeTwo={incomeTwo}
            setIncomeOne={setIncomeOne}
            setIncomeTwo={setIncomeTwo}
            totalIncome={totalIncome}
          />
          <Food
            foodOne={foodOne}
            foodTwo={foodTwo}
            setFoodOne={setFoodOne}
            setFoodTwo={setFoodTwo}
            totalFoodExpense={totalFoodExpense}
          />
        </div>
        <div className="second-row">
          <Bills
            rent={rent}
            water={water}
            internet={internet}
            insurance={insurance}
            electricity={electricity}
            extras={extras}
            setRent={setRent}
            setWater={setWater}
            setInternet={setInternet}
            setInsurance={setInsurance}
            setElectricity={setElectricity}
            setExtras={setExtras}
            totalBills={totalBills}
          />
          <Expenses />
        </div>
        <div className="third-row">
          <Debt />
          <Savings />
          <Total />
        </div>
      </div>
    </div>
  );
}

export default App;
