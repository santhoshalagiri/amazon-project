import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img 
                classname='checkout__ad' 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" 
            />
            <div>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {/* BasketItem*/}
            </div>
        </div>

        <div className="checkout__right">
            {/* <Subtotal /> */}
        </div>
    </div>
  )
}

export default Checkout