require("dotenv").config() //npm i dotenv
const express = require("express") //npm i express
const app = express()
const port = process.env.PORT || process.env.PUERTO || 3001
const path = require("path") //npm i path
const methodOverride = require("method-override") //npm i method-override
const userRoutes = require("./routes/user.routes")
const courseRoutes = require("./routes/course.routes")
const enrollmentRoutes = require("./routes/enrollment.routes")
const mongodbConfig = require("./utils/mongodb.config")

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs") //npm i ejs (SSR)
app.use(express.static(path.join(__dirname,"public")))

//Para poder leer datos (request body) en métodos POST
app.use(express.urlencoded({extended:true}))
//Leer datos JSON en request body POST
app.use(express.json())

app.use(methodOverride("_method"))

//MIDDLEWARE para configurar VARIABLES GLOBALES (res.locals) en vistas EJS
app.use((req,res,next)=>{
    //Crear una variable global a todas las vistas EJS, llamada tituloEJS
    res.locals.tituloEJS = "API REST"
    //Continuar con la ejecución del ENDPOINT al que hayamos invocado
    next()
})

//app get ect...





//Levantar el server
app.listen(port, async () => {
    console.log(`${process.env.API_MENSAJE || "Servidor escuchando en el puerto "}${port}`)
    try {
        //Una vez levantado el server, intentamos conectar con MongoDB
        await mongodbConfig.conectarMongoDB()
            .then(() => {
                console.log("Conectado con MongoDB!!!")
            })
            .catch((err) => {
                console.log(`Error al conectar con MongoDB. Desc: ${err}`)
                process.exit(1)
            })
    } catch (error) {
        console.log(`Error al iniciar las conexiones de base de datos. Desc: ${error}`)
        process.exit(1)
    }
})