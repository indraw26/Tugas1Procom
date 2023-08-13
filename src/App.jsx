import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const [valueA, setValueA] = useState(0)
  const [valueB, setValueB] = useState(0)
  const [result, setResult] = useState(0)

  const HandlerValueA = (e) => {
    const value = parseInt(e.target.value)
    setValueA(value);
    CountingSum(value,valueB)
  }

  const HandlerValueB = (e) => {
    const value = parseInt(e.target.value)
    setValueB(value);
    CountingSum(valueA,value)
  }

  const CountingSum = (valueA,valueB) => {
    const sum= valueA+valueB;
    setResult(sum)
  }
  return (
    <>
    <form action="">
      <h2 className='my-5'>Calculator</h2>
      <input type="number" className='form-control' value={valueA} onChange={HandlerValueA}/>
      <input type="number" className='form-control mt-2' value={valueB} onChange={HandlerValueB}/>
      <br />
      <p className='lead'>Hasil :{result}</p>
    </form>
    </>
  )
}

export default App
