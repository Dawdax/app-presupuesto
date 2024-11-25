import { useMemo, useState } from "react";
import { useBudget } from "../hooks/use-budget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget < 0;
  }, [budget]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "add-budget", payload: { budget } });
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-3xl text-blue-600 font-bold text-center"
          >
            Presupuesto
          </label>
          <input
            type="number"
            className="border border-gray-200 bg-white w-full p-2"
            placeholder="Define tu presupuesto"
            name="budget"
            value={budget}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Definir presupuesto"
          className="disabled:opacity-40 disabled:hover:bg-green-600 cursor-pointer p-2 w-full border rounded-lg font-black uppercase text-white bg-green-600 hover:bg-green-700"
          disabled={isValid}
        />
      </form>
    </>
  );
}
