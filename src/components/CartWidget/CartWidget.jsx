import { AiOutlineShoppingCart } from "react-icons/ai" 
import { useCartContext } from "../../context/CartContext"

export const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div style={{color: "white"}}>
            {cantidadTotal() !==0 &&cantidadTotal()}
            🛒
        </div>
    )
}

AiOutlineShoppingCart
