import { useState } from "react"
import './App.css'

function App() {

  let [Count , setCount]=useState(0);
  // let [reduce, setReduse]=useState();

  function increment(){
    Count=Count+1;
    setCount(Count)
    // console.log(Count)


  }
  function decriment(){
    Count = Count-1;
    setCount(Count)

  }

  function reset(){

    setCount(0);



  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      
      <h1 className="text-4xl font-bold text-white mb-6">
        Counter App
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8 w-80 text-center">
        <p className="text-xl font-semibold mb-4">Count</p>
        <p className="text-5xl font-bold text-blue-500 mb-6">{Count}</p>

        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer"
            onClick={increment}
          >
            ➕ Increment
          </button>

          <button className="bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition cursor-pointer"
          
          onClick={decriment}
          >
            ➖ Decrement
          </button>

          <button className="bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition cursor-pointer" 
          
          onClick={reset}
          
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
