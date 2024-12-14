/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from "react";
import { readItems, type Item } from "./read";

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    async function read() {
      try {
        const temp: Item[] = await readItems();
        setItems(temp);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    read();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
