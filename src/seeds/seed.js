require("dotenv").config(); // Carga las variables de entorno desde el archivo .env
const { conectarMongoDB } = require("../utils/mongodb.config"); // Ajusta la ruta según dónde tengas tu función de conexión
const Course = require("../models/categoria.model"); // Ajusta la ruta a tu modelo de categoría

const courseIniciales = [
    { nombre: "Curso de Autoayuda" },

];

const ejecutarSeed = async () => {
    try {
        // 1. Conectarnos a MongoDB
        console.log("Conectando a MongoDB...");
        await conectarMongoDB();
        console.log("¡Conexión exitosa!");

        // 2. Borrado masivo para vaciar la colección antes de insertar
        console.log("Vaciando la colección de cursos...");
        const resultadoDelete = await Course.deleteMany({}); //DELETE FROM Categorias
        console.log(`Se eliminaron ${resultadoDelete.deletedCount} cursos anteriores.`);

        // 3. Inserción masiva de los nuevos datos
        console.log("Insertando nuevos cursos...");
        const courseInsertados = await Course.insertMany(courseIniciales);
        console.log(`¡Se insertaron ${courseInsertados.length} cursos correctamente!`);

        // Mostramos las categorías insertadas en consola
        console.log("Cursos registrados:", courseInsertados);

    } catch (error) {
        console.error("Error durante el proceso de seeding:", error.message);
    } finally {
        // 4. Cerramos la conexión al terminar
        const mongoose = require("mongoose");
        await mongoose.connection.close();
        console.log("Conexión cerrada.");
        process.exit(0);
    }
};

ejecutarSeed();