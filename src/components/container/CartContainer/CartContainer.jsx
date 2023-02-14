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

      <div className="contenedorGeneral">
         {cartList.map(prod => (
            <div key={prod.id}>
               <img src={prod.foto} className="w-25" />
               <label> - Nombre: {prod.name}</label>
               <label> - Cantidad: {prod.cantidad}</label>
               <label> - Precio: {prod.price}</label>
               <button onClick={() => eliminarItem(prod.id)}> X </button>
            </div>
         ))}

         {confirmarCompra ?
            <div>
               <h1>Se ha confirmado su compra. </h1><br /> <br /> <h3>Su código de compra es: <br /> <br /> {confirmarCompra}</h3>
            </div> :
            <div>
               {cartList.length > 0 ? <div>
                  <form onSubmit={generarOrden}>
                     <h2>Completa el Fromulario</h2>
                     <input
                        type="text"
                        name="name"
                        placeholder='ingresar nombre'
                        value={dataForm.name}
                        onChange={hanleOnChange}
                     /><br /><br />
                     <input
                        type="number"
                        name="phone"
                        placeholder='ingresar Teléfono'
                        value={dataForm.phone}
                        onChange={hanleOnChange}
                     /><br /><br />
                     <input
                        type="text"
                        name="email"
                        placeholder='ingresar email'
                        value={dataForm.email}
                        onChange={hanleOnChange}
                     /><br /><br />
                     <input
                        type="text"
                        name="confirmEmail"
                        placeholder='Vuelva a ingresar email'
                        value={dataForm.confirmEmail}
                        onChange={hanleOnChange}
                     /><br /><br />
                     <button type="submit" className="btn btn-outline-success">Comprar</button>
                  </form><br />
                  <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button> 
               </div> : <h1>Su carrito está vacío, si desea agregar algo pulse el botón "Seguir comprando" aquí debajo.</h1>}

               {precioTotal() !== 0 && <h2>Precio total: {precioTotal()} </h2>}
            </div>
         }

         <Link to="/">
            <button className="btn btn-dark">Seguir Comprando</button>
         </Link>

      </div>

   )
}

export default CartContainer
