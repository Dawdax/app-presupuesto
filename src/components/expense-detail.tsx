import { useMemo } from "react";
import { categories } from "../data/categories";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./amount-display";

type ExpenseDetail = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetail) {
  const categoryInfo = useMemo(
    () => categories.find((cat) => cat.id === expense.category),
    [expense]
  );

  return (
    <div className="bg-white shadow-lg p-10 border-b border-x-gray-200 flex gap-5 items-center">
      <div>
        <img
          className="w-20"
          alt="icono gasto"
          src={`/icono_${categoryInfo?.icon}.svg`}
        />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-bold uppercase text-slate-500">
          {categoryInfo?.name}
        </p>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">
          {formatDate(expense.date!.toString())}
        </p>
      </div>
      <AmountDisplay amount={expense.amount} />
    </div>
  );
}
