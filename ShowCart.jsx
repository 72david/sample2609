import { useContext } from "react"
import counterContext from "./src/Context/Counter/counterContext"

const ShowCart = () => {
    const { cart } = useContext(counterContext)
    return (
        <div>
            <ul>
                {
                    Object.entries(cart).map(([product, count], i) => (
                        <li key={i}>{product} : {count}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShowCart