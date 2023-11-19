import { useEffect, useState } from "react";

import axios from "axios";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quizz, setQuizz] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get(url)
      .then((res) => setQuizz(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return { loading, error, quizz };
}
