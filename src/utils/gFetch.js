let productos = [
    { id: "1" ,categoria: "calcos", name: "Clandes ARG",            price: 250,     foto:"/public/logoclandesarg.jpg" },
    { id: "2" ,categoria: "calcos", name: "Clandes BR",             price: 250,     foto:"/public/logoclandesbrasil.jpg" },
    { id: "3" ,categoria: "calcos", name: "Clandes IG",             price: 250,     foto:"/public/logoclandesinsta.jpg" },
    { id: "4" ,categoria: "calcos", name: "Clandes IG2",            price: 250,     foto:"/public/logoclandesinsta2.jpg" },
    { id: "5" ,categoria: "calcos", name: "Clandes ITA",            price: 250,     foto:"/public/logoclandesitalia.jpg" },
    { id: "6" ,categoria: "calcos", name: "Clandes NIKE",           price: 250,     foto:"/public/logoclandesnike.jpg" },
    { id: "7" ,categoria: "calcos", name: "Clandes Noba",           price: 250,     foto:"/public/logoclandesnoba.jpg" },
    { id: "8" ,categoria: "calcos", name: "Clandes USA",            price: 250,     foto:"/public/logoclandesusa.jpg" },
    { id: "9" ,categoria: "ropa", name: "Remera Azul Yamaha",       price: 4500,    foto:"/public/remeraazulyamaha.jpg" },
    { id: "10" ,categoria: "ropa", name: "Remera Negra Ferrari",    price: 3500,    foto:"/public/remeraclandesferrari.jpg" },
    { id: "11" ,categoria: "ropa", name: "Remera Negra Honda",      price: 3500,    foto:"/public/remeraclandeshonda.jpg" },
    { id: "12" ,categoria: "ropa", name: "Remera Negra Mujer",      price: 3500,    foto:"/public/remeraclandesmujer.jpg" },
    { id: "13" ,categoria: "ropa", name: "Remera Negra Yamaha",     price: 4500,    foto:"/public/remeranegrayamaha.jpg" },
    { id: "14" ,categoria: "guantes", name: "Guantes Azules",       price: 2200,    foto:"/public/guantesazules.jpg" },
    { id: "15" ,categoria: "guantes", name: "Guantes Negros",       price: 2200,    foto:"/public/guantesnegros.jpg" },
    { id: "16" ,categoria: "guantes", name: "Guantes Rojos",        price: 2200,    foto:"/public/guantesrojos.jpg" },
    { id: "17" ,categoria: "cascos", name: "Casco Blanco-Rosa",     price: 12000,   foto:"/public/cascoblancomujer.jpg" },
    { id: "18" ,categoria: "cascos", name: "Casco Gris",            price: 12000,   foto:"/public/cascogris.jpg" },
    { id: "19" ,categoria: "cascos", name: "Casco Negro Cerrado",   price: 23000,   foto:"/public/casconegrocerrado.jpg" },
    { id: "20" ,categoria: "cascos", name: "Casco Negro Cross",     price: 17000,   foto:"/public/casconegrocross.jpg" },
    { id: "21" ,categoria: "cascos", name: "Casco Rebatible",       price: 20000,   foto:"/public/casconegrorebatible.jpg" },
    { id: "22" ,categoria: "escape", name: "Escape Simple",         price: 9000,    foto:"/public/canoescape1.jpg" },
    { id: "23" ,categoria: "escape", name: "Escape Cubierto Claro", price: 25000,   foto:"/public/escape2.jpg" },
    { id: "24" ,categoria: "escape", name: "Escape Cubierto Oscuro",price: 25000,   foto:"/public/escape1.jpg" },

  ]

  export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === (id)) : productos)
        }, id ? 0 : 1500)
    })
}

