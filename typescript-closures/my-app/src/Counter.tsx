/* eslint-disable react-hooks/exhaustive-deps -- Delete this line! */
import { useEffect, useState, useCallback } from "react";

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => ({ foo: "bar" }), []);

  useEffect(() => {
    const data = getData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [getData]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
