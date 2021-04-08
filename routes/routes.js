const router = require('express').Router()
const bd = require('../bd.json')

router.get('/provedores', (req,res)=>{
    try {
        res.status(200).json(bd);
    } catch (error) {
        res.send(error)   
    }
})


router.post('/provedores',async (req,res) => {
    console.log(bd.vendos);
    const database= bd.vendors
    const datos = req.body;
    console.log(datos.datos);
    let agregado = database.push(datos.datos)
    console.log(agregado);
    try {
        res.send(true)
    } catch (error) {
        res.send(error)
    }

    
})
 

router.delete('/provedores/:nombre', (req,res)=>{
    const nombre = req.params;
    let proveedores = bd.vendors
    proveedores.map( item=>{
        console.log(nombre.nombre);
        if(item.nombre == nombre.nombre){
            
            delete proveedores[(item.nombre)-1]
        }
    })
    try {
        res.send(true)
    } catch (error) {
        res.send(error)
    }
   
})



module.exports = router;