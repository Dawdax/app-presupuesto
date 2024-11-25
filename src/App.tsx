import { useMemo } from "react";
import BudgetForm from "./components/budget-form";
import { useBudget } from "./hooks/use-budget";
import BudgetTracker from "./components/budget-tracker";

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center text-4xl font-black text-white">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
    </>
  );
}

export default App;
