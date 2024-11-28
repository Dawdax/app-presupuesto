import { useMemo } from "react";
import { useBudget } from "../hooks/use-budget";
import ExpenseDetail from "./expense-detail";

export default function ExpenseList() {
  const { state } = useBudget();

  const isEmpy = useMemo(() => state.expenses.length === 0, [state.expenses]);

  return (
    <div>
      {isEmpy ? (
        <p className="text-gray-600 text-2xl font-bold text-center">
          No hay gastos
        </p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold text-center mb-5">
            Lista de gastos
          </p>
          {state.expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
