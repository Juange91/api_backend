
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/', require('./routes/routes'));

app.listen(PORT,(err) => {
if (err) {
    console.log('Error en el servidor');
}else{
    console.log(`Servidor conectado en el puerto ${PORT}`);
}
})

