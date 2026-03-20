export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect({ name, quantity, category })}
      className="border rounded-lg p-4 m-2 shadow-md cursor-pointer hover:bg-gray-100"
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-sm italic text-gray-600">{category}</p>
    </li>
  );
}