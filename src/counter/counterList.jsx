import React,{useState} from 'react'
import Counter from "./counter";

const CounterList = () => {
 let initialState = [
  {id:0,value:1,name:'Ненужная вещь'},
  {id:1,value:2,name:'Ложка'},
  {id:2,value:1,name:'Вилка'},
  {id:3,value:3,name:'Тарелка'},
  {id:4,value:0,name:'Набор минималиста'}
 ]

 const [counter,setCounter] = useState(initialState)

 const handleDelete = (id)=>{
  const newCounter = counter.filter(c=>c.id !== id)
  setCounter(newCounter)
 }

 const handleReset = () => {
  setCounter(initialState)
  console.log('reset')
 }
 const handleIncrement = (id) => {
  const el =counter.find(c=>c.id === id)
  el.value >=0 ? el.value = el.value + 1 : el.value = 0

    setCounter([...counter])
 }

 const handleDecrement = (id) => {
  const el =counter.find(c=>c.id === id)
  el.value >0 ? el.value = el.value - 1 : el.value = 0
  setCounter([...counter])
 }

 return <div>
    {counter.map((count) => (
      <Counter key={count.id} {...count} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement}><h1>lil</h1></Counter>
    ))}
   <button className="btn btn-primary btn-sm m-2" onClick={handleReset} >Сброс</button>
 </div>
}

export default CounterList
