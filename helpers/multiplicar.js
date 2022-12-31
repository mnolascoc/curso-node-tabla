const fileSystem = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let out = "";
        let consola = "";

        for (let index = 1; index <= 10; index++) {
            out += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${"x".yellow} ${index} ${"=".yellow} ${base * index}\n`;
        }

        if (listar) {
            console.log("===================".green);
            console.log("  Tabla del:".green, colors.blue(base));
            console.log("===================".green);
            console.log(consola);
        }

        fileSystem.writeFileSync(`salida/tabla-${base}.txt`, out);
    } catch (error) {
        throw error;
    }

    return `tabla-${base}.txt`;
};

module.exports = { crearArchivo };
