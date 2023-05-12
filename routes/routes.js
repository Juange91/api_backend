
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
    const { rrhh_id, campaign_id, conversation_id, messages } = req.body

    fs.appendFile('conversaciones.txt',
   `\n
   Datos recibidos de la campaña :
   rrhh_id ${rrhh_id}
   campaign_id ${campaign_id}
   conversation_id ${conversation_id}`
        , (error) => {
            if (error) {
                console.log(error);
            }
        })

    messages.forEach((message, index) => {
        fs.appendFile('conversaciones.txt',

    `\n
    Mensaje ${index + 1}:
    Autor: ${message.autor}
    Texto: ${message.text}
    Media: ${message.media}
    Tipo de media: ${message['media-type']}
    Fecha y hora: ${message['fecha-hora']}
    ` , (error) => {
            if (error) {
                console.log(error);
            }
        })
    });

})
module.exports = router
