const yargs = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();

crearArchivo(argv.base, argv.list)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado")) //rainbow es parte de la libreria "colors"
    .catch((err) => console.log(err));
