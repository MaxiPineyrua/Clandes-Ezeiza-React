import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"

const CartContainer = () => {
   const [dataForm, setDataForm] = useState({
      name: "",
      phone: "",
      email: "",
      confirmEmail: "",
   })

   const [confirmarCompra, setConfirmarCompra] = useState("")

   const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

   const generarOrden = (evt) => {

      evt.preventDefault()

      if (cartList.length > 0 && dataForm.name && dataForm.phone && dataForm.email && dataForm.email === dataForm.confirmEmail) {

         const order = {}

         order.buyer = dataForm

         order.items = cartList.map(({ id, name, price }) => ({ name, price, id }))

         order.total = precioTotal()

         const db = getFirestore()

         const queyCollection = collection(db, "orders")

         addDoc(queyCollection, order)
            .then(resp => setConfirmarCompra(resp.id))
            .catch(err => console.log(err))
            .finally(vaciarCarrito())
      } else { alert("Por favor ingrese bien sus datos o asegurese de tener productos en el carrito.") }
   }

   const hanleOnChange = (evt) => {

      setDataForm({
         ...dataForm,
         [evt.target.name]: evt.target.value
      })
   }

   return (

      <div>
         <div>
            {cartList.length > 0 ? <div>
               {cartList.map(prod => (
                  <div key={prod.id}>
                     <img src={prod.foto} className="w-25" />
                     <label> - Nombre: {prod.name}</label>
                     <label> - Cantidad: {prod.cantidad}</label>
                     <label> - Precio: {prod.price}</label>
                     <button onClick={() => eliminarItem(prod.id)}> X </button>
                  </div>
               ))}
            </div> :
               <div><h2>Su carrito esta vacío.</h2> <br /> </div>
            }
         </div>

         {confirmarCompra ?
            <div>
               <h2>Hemos confirmado su compra. <br /> <br /> Su código de compra es: <br />{confirmarCompra}</h2>
            </div> :
            <div>
               <form onSubmit={generarOrden} className="form-control w-50">
                  <h3>Formulario</h3>
                  <input
                     type="text"
                     name="name"
                     placeholder="Ingrese su nombre"
                     value={dataForm.name}
                     onChange={hanleOnChange}
                  /><br /> <br />
                  <input
                     type="text"
                     name="phone"
                     placeholder="Ingrese su teléfono"
                     value={dataForm.phone}
                     onChange={hanleOnChange}
                  /><br /> <br />
                  <input
                     type="text"
                     name="email"
                     placeholder="Ingrese su email"
                     value={dataForm.email}
                     onChange={hanleOnChange}
                  /><br /> <br />
                  <input
                     type="text"
                     name="confirmEmail"
                     placeholder="Vuelva a ingresar su email"
                     value={dataForm.confirmEmail}
                     onChange={hanleOnChange}
                  /> <br /> <br />
                  <button type="submit" className="btn btn-outline-success">Comprar</button>
                  <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>

               </form>
               {precioTotal() !== 0 && <h2>Precio total: {precioTotal()} </h2>}
            </div>
         }


         <Link to="/">
            <button>Seguir Comprando</button>
         </Link>
      </div>

   )
}

export default CartContainer
