import { useContext } from "react"
import Counter from "./Counter"
import counterContext from "./Context/Counter/counterContext"

const ShowCount = () => {
    const {count}=useContext(counterContext)
  return (
    <div>
        <h1>{count}</h1>
        <Counter  />
    </div>
  )
}

export default ShowCount