import { AiOutlineShoppingCart } from 'react-icons/ai' 
import { BsFillCartFill } from 'react-icons/bs' 


export const CartWidget = () => {
    return (
        <div>
            <i>{<BsFillCartFill />}</i>
            {/* <img src={imagen} alt="imagen" /> */}
            {/* <img src='/public/vite.svg' alt="imagen" /> */}
            {/* <img className='w-25' src='https://cdn.shopify.com/s/files/1/0526/7144/7238/products/mini-shopping-cart-gadget-flying-tiger-copenhagen-780928.jpg?v=1665620501&width=1200' alt="imagen" /> */}
        </div>
    )
}

AiOutlineShoppingCart
