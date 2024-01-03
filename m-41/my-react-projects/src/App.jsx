import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'


function App() {
  const [watches,setWatches]=useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res=>res.json())
    .then(data=>setWatches(data))
  })
  // const [count, setCount] = useState(0)
  
  // const watches=[
  //   {id:1, name:'Apple Watch', Price:200},
  //   {id:1, name:'Samsung Watch', Price:200},
  //   {id:1, name:'XiaoMI Watch', Price:200},
  //   {id:1, name:'Nokia Watch', Price:200}
  // ]
  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399.99 },
  //   { id: 2, name: "Samsung Galaxy Watch 4", price: 349.99 },
  //   { id: 3, name: "Fitbit Sense", price: 299.95 },
  //   { id: 4, name: "Garmin Venu 2", price: 399.99 },
  //   { id: 5, name: "Huawei Watch GT 3", price: 279.99 },
  // ];


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watches=><Watch key={watches.id} watch={watches}></Watch>)
      }

    </>
  )
}

export default App
