import { useContext } from "react"
import counterContext from "./Context/Counter/counterContext"

const Product = () => {

    const products=[
        'Pen','Laptop','Mobile','Earbuds','Watch','bag','Camera'
    ]

    const {decreaseCount,increaseCount} = useContext(counterContext)

  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'15px'}}>
        {
            products.map((product,i)=>(
                <div key={i} style={{border:'solid 1px grey',padding:'10px'}}>
                    <h1>{product}</h1>
                    <div>
                    <button onClick={()=>decreaseCount(product)} >-</button>
                    <span>Cart</span><button onClick={()=>increaseCount(product)} >+</button>
                    </div>

                </div>
        ))
        }
    </div>
  )
}

export default Product