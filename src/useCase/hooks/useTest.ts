import { useEffect, useState } from "react";

export function useTest() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return { loading };
}
