import { useState } from "react"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useCartContext } from "../../../context/CartContext"

const CartContainer = () => {
   const [dataForm, setDataForm] = useState({
      name: "",
      phone: "",
      email: ""
   })

   const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

   const generarOrden = (evt) => {
      evt.preventDefault()
   
      const order = {}

      order.buyer = dataForm

      order.items = cartList.map( ( {id, name,price } ) => ({name, price, id}))

      order.total = precioTotal()

      const db = getFirestore() 

      const queyCollection =  collection(db, "orders")

      addDoc(queyCollection, order)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
   }
   
   const hanleOnChange = (evt)=>{
      console.log(evt.target.name)
      console.log(evt.target.value)

      setDataForm({
         ...dataForm,
         [evt.target.name]: evt.target.value
      })
   }
   
   console.log(dataForm)
   
   return (
      <div>
         {cartList.map(prod =>  (
            <div key={prod.id}>
               <img src={prod.foto} className="w-25" />
               <label>nombre: {prod.name}</label>
               <label> - cantidad: {prod.cantidad}</label>
               <label> - precio: {prod.price }</label>
               <button onClick = {() => eliminarItem(prod.id)}> X </button>
            </div>
         ))}
          
         <form onSubmit={generarOrden} className="form-control w-50">
            <h3>Formulario</h3>
            <input 
               type="text" 
               name="name"  
               placeholder="ingresar nombre"
               value = {dataForm.name}
               onChange={hanleOnChange}
            /><br />
            <input 
               type="text" 
               name="phone"  
               placeholder="ingresar Teléfono"
               value = {dataForm.phone}
               onChange={hanleOnChange}
            /><br />
            <input 
               type="text" 
               name="email"  
               placeholder="ingresar email"
               value = {dataForm.email}
               onChange={hanleOnChange}
            />
            <button type="submit" className="btn btn-outline-success">Generar Orden</button>
         </form>
         <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>

         { precioTotal() !== 0 &&  <h2>Precio total: { precioTotal() } </h2>  }  
      </div>
  )
}

export default CartContainer
