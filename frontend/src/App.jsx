import Quiz from "./components/Quizs";
import useFetch from "./hooks/useFetch";
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return <Quiz />;
}

export default App;
