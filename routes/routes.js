
const express = require('express');
const router = express.Router();
const fs = require('fs');

const conversacion = [];
const atributos_conversacion = ['rrhh_id','campaign_id','conversation_id'];
const atributos_mensajes = ['autor','text','media','media-type','fecha-hora'];

router.post('/', (req, res) => {
    const data = req.body
    res.json(data);
let data_result = JSON.stringify(data);
let result  = JSON.parse(data_result);

conversacion[0] = result.rrhh_id;
conversacion[1] = result.campaign_id;
conversacion[2] = result.conversation_id;

for (let i = 0; i < conversacion.length; i++) {
    let msj = JSON.stringify(conversacion[i]) 
    fs.appendFile('ejemplo.txt', `\n${atributos_conversacion[i]} : ${msj}` , (error) => {
        if (error) {
            console.log(error);
        }
    }) 
}

for (let i = 0; i < result.messages.length; i++) {

    fs.appendFile('ejemplo.txt', 
   `\n
   ${atributos_mensajes[0]} : ${result.messages[i].autor}
   ${atributos_mensajes[1]} : ${result.messages[i].text}
   ${atributos_mensajes[2]} : ${result.messages[i].media}
   ${atributos_mensajes[3]} : ${result.messages[i].media_type}
   ${atributos_mensajes[4]} : ${result.messages[i].fecha_hora}`
    , (error) => {
        if (error) {
            console.log(error);
        }
    })
}  
})
module.exports = router
