import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900">
      <div>
        <h1 className="text-black text-3xl font-bold mb-6 text-center">
          Add a Shopping Item
        </h1>

        <NewItem />
      </div>
    </main>
  );
}
