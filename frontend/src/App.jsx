import useFetch from "./hooks/useFetch";
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const { quizz } = useFetch(apiUrl);

  console.log(quizz);

  return <h1>He</h1>;
}

export default App;
