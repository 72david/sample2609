import { useContext } from "react"
import counterContext from "./Context/Counter/counterContext"

const Counter = () => {
    const {count,setCount}=useContext(counterContext)
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count</button>
    </div>
  )
}

export default Counter