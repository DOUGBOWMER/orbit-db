

import { useState } from 'react'
import Order from "./order"
import Cart from './cart'

const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Checkout() {
  const [page, setpage] = useState(true)
  function handlesubmit(){
    setpage(false)
  }
  return (
    <div className="bg-gray-50 w-4/5 shadow-md">
<Cart />

     </div>
  )
}
export default Checkout
