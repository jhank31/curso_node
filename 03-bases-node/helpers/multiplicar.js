
const fs = require('fs');
const colors = require( 'colors' );
const crearArchivoTabla = async ( base = 5, listar, hasta ) => {

    try {
        let salida, consola = '';
        
    
        for( let i = 1; i <= hasta ; i ++ ) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.yellow(base)} ${colors.magenta('x')} ${colors.yellow(i)} = ${colors.magenta(base * i)}\n`.toString();
        }
        if ( listar == true ) {
            console.log(`=============================`.cyan);
            console.log(`      Tabla del: ${base}`.magenta);
            console.log(`=============================`.cyan);
            console.log(consola);

        }
        
        fs.writeFileSync( `tabla-${base}.txt`, salida );
        return (`tabla-${base}.txt`);
    } catch ( err ) {
        throw err;
    }

}

module.exports = {
    crearArchivoTabla
}