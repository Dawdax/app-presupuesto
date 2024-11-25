import { useBudget } from "../hooks/use-budget";
import AmountDisplay from "./amount-display";

export default function BudgetTracker() {
  const { state } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.png" alt="Grafico de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reiniciar App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={200} />
        <AmountDisplay label="Gastado" amount={100} />
      </div>
    </div>
  );
}
