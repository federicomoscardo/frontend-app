// traemos el módulo express, que acabamos de instalar LOCALMENTE (ponemos const para no cometer errores y generar sobrescrituras a futuro)
const express = require('express')

// ejecutamos el módulo express, y lo guardamos en APP
const app = express()

// módulo que nos ayuda a generar la ruta a un archivo
const path = require('path')

// le digo a la app, que cualquier archivo estático estará en la carpeta public
app.use(express.static(path.join(__dirname, 'public')))


// http://localhost:3000/
// no se incluye la URL del servidor de mi web, solo a partir del /...
// http://www.miaplicacion.com.ar/(a partir de acá es lo que vay a definir en los GET!!!)
// http://www.miaplicacion.com.ar NO IMPORTA!! Puede ser cualquier cosa, todo lo que viene dsps del / es la estructura de mi web...

// SIEMPRE TIENE QUE HABER UNA RUTA PRINCIPAL: app.get('/' ....)

// esta funcion puede recibir hasta 3 parámetros (lo normal es 2: request y response)
app.get('/', function(req, res) {
    console.log('Esto es una prueba y lo veo solo en la consola...')
    //esto solo lo veo en la consola... no en el página

    // para responder algo y verlo en la web, va este comando. Escribo una respuesta y la envío al cliente
    //res.send('Hola usuario!')

    // si escribo otra respuesta, solo se enviará la priemra, se puede enviar UNA SOLA RESPUESTA. Esta se manda y se cierra la comunicación...
    //res.send('otra respuesta')

    // acá usaremos el módulo path para generar la ruta de acceso absoluta al archivo index.html
    let file = path.resolve('src', 'index.html')

    res.sendFile(file)

})

app.get('/contacto', function(req, res) {

    let file = path.resolve('src', 'contacto.html')

    res.sendFile(file)

})

app.get('/home', function(req, res) {

    let file = path.resolve('src', 'home.html')

    res.sendFile(file)

})

//toda app funciona a través de un puerto, configuramos qué puerto va a estar escuchando esta app (por lo general el 3000)
app.listen(3000)

