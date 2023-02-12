import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const [ producto, setProducto ] =  useState({})
   const {detaliId} = useParams()
   console.log(detaliId)

   useEffect(()=>{
      const db = getFirestore()
      const queryDoc = doc(db, 'items', detaliId)
      getDoc(queryDoc)
      .then(results => setProducto( { id: results.id, ...results.data() } ))
      .catch(err => console.error(err))
   }, [])

   return (
      <div className="border border-4 border-success">
         <ItemDetail producto={producto} />
      </div>
   )
}

export default ItemDetailContainer
