import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./error-message";
import { useBudget } from "../hooks/use-budget";

export default function ExpenseForm() {
  const initialStateExpense = {
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  };

  const [expense, setExpense] = useState<DraftExpense>(initialStateExpense);

  const [error, setError] = useState("");
  const { dispatch } = useBudget();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const isAmountFIeld = ["amount"].includes(name);

    setExpense({
      ...expense,
      [name]: isAmountFIeld ? Number(value) : value,
    });
  };
  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    dispatch({ type: "add-expense", payload: { expense } });
    setExpense(initialStateExpense);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
          Nuevo gasto
        </legend>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Nombre gasto:
          </label>
          <input
            type="text"
            id="expenseName"
            placeholder="Agrega el nombre del gasto"
            className="bg-slate-100 p-2"
            name="expenseName"
            value={expense.expenseName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xl">
            Cantidad:
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Agrega la cantidad del gasto: Ejem. 300"
            className="bg-slate-100 p-2"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xl">
            Categoría:
          </label>
          <select
            value={expense.category}
            id="category"
            className="bg-slate-100 p-2"
            name="category"
            onChange={handleChange}
          >
            <option>-- seleccione --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-xl">
            Fecha del gasto:
          </label>
          <DatePicker
            value={expense.date}
            className="bg-slate-100 p-2 border-0"
            onChange={handleChangeDate}
          />
        </div>
        <input
          type="submit"
          className="bg-green-600 cursor-pointer p-2 uppercase font-bold rounded-lg w-full text-white"
          value={"Registrar gasto"}
        />
      </form>
    </>
  );
}
