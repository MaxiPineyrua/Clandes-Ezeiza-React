import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"
import { getItems, getItemsByCategory } from "../../../firebase/firebase.js";
import { DotSpinner } from '@uiball/loaders'

export const ItemListContainer = ({ saludo }) => {
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)
   const { categoryId } = useParams()

   useEffect(() => {
      (categoryId ? getItemsByCategory(categoryId) : getItems())
         .then(respuestaPromesa => {
            setProductos(categoryId ? respuestaPromesa.filter(items => items.categoria === categoryId) : respuestaPromesa)
         })
         .then(err => console.log(err))
         .finally(() => setLoading(false))
   }, [categoryId])

   return (
      <div className="container mt-5">
         {loading
            ?
            <center>
               <DotSpinner
                  size={40}
                  speed={0.9}
                  color="black"
               />
            </center>
            :
            <ItemList productos={productos} />
         }
      </div>
   )
}
