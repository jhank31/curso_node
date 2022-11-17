const colors = require( 'colors' );
const { crearArchivoTabla } = require ( './helpers/multiplicar' );
const argv = require( './config/yarg' )


console.clear();


crearArchivoTabla( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(colors.green(nombreArchivo, 'creado')))
    .catch( err => console.log(err))


