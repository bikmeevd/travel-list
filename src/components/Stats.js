export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start eding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numberPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numberPacked} (${precentage}%)`}
      </em>
    </footer>
  );
}
