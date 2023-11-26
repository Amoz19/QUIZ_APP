import React, { useEffect } from "react";
import axios from "axios";

const Test = () => {
  useEffect(() => {
    axios
      .get("https://quiz-api-zeta.vercel.app/api/quiz")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err.message));
  }, []);
  return <div>Test</div>;
};

export default Test;
