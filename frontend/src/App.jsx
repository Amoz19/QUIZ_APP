function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 w-2/6 rounded-md px-8 py-4">
        <div className="flex justify-end">
          <button className="bg-green-500 px-4 py-2 rounded ">1/3</button>
        </div>

        <div>
          <h3 className="text-xl text-green-500">What is React?</h3>
          <button className="flex w-full bg-white rounded my-4 px-4 py-2">
            <p className="mr-4">1</p>
            <p>Frontend Libary</p>
          </button>
          <button className="flex w-full bg-white rounded px-4 py-2">
            <p className="mr-4">2</p>
            <p>Backend Libary</p>
          </button>
        </div>
        <div className="flex justify-between my-4  items-center">
          <button className="bg-green-500 px-4 py-2 rounded">Next</button>
          <p className="text-green-500">Correct Answer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
