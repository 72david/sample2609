import { useContext} from 'react'
import './App.css'

import counterContext from './Context/Counter/counterContext'
import Product from './Product'
import ShowCart from '../ShowCart'

function App() {

  const {count,showCart,setShowCart}=useContext(counterContext)

  return (
    <div>
      <p>Cart:{count}</p><button onClick={()=>setShowCart(prev=>!prev)}>Cart</button>
        <Product />
        {
          showCart && <ShowCart />
        }
    </div>
  )
}

export default App
