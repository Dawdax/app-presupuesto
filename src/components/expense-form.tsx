import { categories } from "../data/categories";

export default function ExpenseForm() {
  return (
    <>
      <form action="">
        <legend className="uppercase text-center text-2xl font-black border-b-4 py-2 border-blue-500">
          Nuevo gasto
        </legend>

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
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xl">
            Categoría:
          </label>
          <select id="category" className="bg-slate-100 p-2" name="category">
            <option>-- seleccione --</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
