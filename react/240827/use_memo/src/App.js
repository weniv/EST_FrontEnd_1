import { useState, useMemo } from 'react'

function payLoad() {
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const result = useMemo(() => {
    return payLoad();
  }, [countTwo]);

  // let result = payLoad()

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>UP!</button>
    </div>
  );
}
export default App;