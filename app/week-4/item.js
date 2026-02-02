export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-lg p-4 m-2 shadow-md">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-sm italic text-gray-600">{category}</p>
    </li>
  );
}
