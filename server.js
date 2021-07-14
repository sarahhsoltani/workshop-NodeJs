const express = require('express')
//module de gestion de fichier fs
const fs=require('fs')
const app=express()

//jusq là j'ai un serveur qui a un @ et port
const router=express.Router()
 // 1--- router c un module de express (chemin/path)
app.use("/",router)

router.get("/user",(req,res)=>{
    res.send('sarah')
})
router.get("/product",(req,res)=>{
    res.send('bijoux')
})
// on va voir les routes paramétrées(dynamique)
router.get('/:drink',(req,res)=>{ //
    res.send( "vous avez demandé " + `${req.params.drink}`) 
})
//exemple de calculatrice
router.get('/add/:num1/:num2',(req,res)=>{
    res.send('la somme est : '+ `${parseInt(req.params.num1)+parseInt(req.params.num2)}`)
     
 
    //exemple de fs
fs.writeFile("test.txt",`${parseInt(req.params.num1)+parseInt(req.params.num2)}`,(err)=>{
    if(err)
    console.log('err')
    else
    console.log('opération est terminer avec succés ')
})

})

//listen server
app.listen(3000,()=>console.log("serveur en marche sur le port 3000..."))