export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-3 rounded-md bg-slate-100">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">
        Quantity: {quantity} | Category: {category}
      </p>
    </li>
  );
}
